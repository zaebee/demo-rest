
<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-12 text-center my-3">
        <h2 class="mb-3 display-4 text-uppercase">{{ post.name }}</h2>
      </div>
      <div class="col-md-6 mb-4">
        <img
          v-if="preview"
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          :src="preview"
          alt
        >
        <img
          v-else
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          src="@/static/images/placeholder.png"
        >
      </div>
      <div class="col-md-4">
        <form @submit.prevent="submitRecipe">
          <b-alert
            dismissible
            :show="!!error"
            class=""
            variant="danger">{{error}}</b-alert>
          <div class="form-group">
            <label for>Название</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
          <div class="form-group">
            <label for>Контент</label>
            <textarea v-model="post.content" class="form-control" rows="8"></textarea>
          </div>
          <div class="form-group">
            <label for>Картинка</label>
            <input type="file" name="file" @change="onFileChange">
          </div>
          <button type="submit" class="btn btn-primary">Оправить</button>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  middleware: 'auth',
  head() {
    return {
      title: "Создать пост"
    };
  },
  data() {
    return {
      post: {
        title: "",
        picture: "",
        content: "",
      },
      preview: "",
      error: null
    };
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.post.picture = files[0];
      this.createImage(files[0]);
    },
    createImage(file) {
      // let image = new Image();
      let reader = new FileReader();
      let vm = this;
      reader.onload = e => {
        vm.preview = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    async submitRecipe() {
      const config = {
        headers: { "content-type": "multipart/form-data" }
      };
      let formData = new FormData();
      for (let data in this.post) {
        formData.append(data, this.post[data]);
      }
      try {
        let response = await this.$axios.$post("/posts/", formData, config);
        this.$router.push("/posts/");
      } catch (e) {
        this.error = e.response && e.response.data;
        console.log(e);
      }
    }
  }
};
</script>
<style scoped>
</style>
