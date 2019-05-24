<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-12 text-center my-3">
        <h2 class="mb-3 display-4 text-uppercase">{{ post.title }}</h2>
      </div>
      <div class="col-md-6 mb-4">
        <img
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          :src="post.picture"
          alt
        >
      </div>
      <div class="col-md-6">
        <div class="recipe-details">
          <h3>Контент</h3>
          <div v-html="post.content"></div>

          <div v-if="post && post.comments.length">
            <h4>Комментарии</h4>
            <hr>
            <ul class="list-unstyled">
              <b-media tag="li" v-for="comment in post.comments" :key="comment.id" class="mb-4">
                <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder"></b-img>

                <h5 class="mt-0 mb-1">
                  {{comment.author.username}}
                </h5>
                <p class="mb-0">
                  {{comment.text}}
                </p>
                <small>
                  Дата: {{date(comment.date_added)}}&nbsp;в&nbsp;
                  {{time(comment.date_added)}}
                </small>
              </b-media>
            </ul>
          </div>

          <hr>
          <form @submit.prevent="submitComment">
            <div class="form-group">
              <b-alert
                dismissible
                :show="!!error"
                class=""
                variant="danger">{{error}}</b-alert>
              <label for>Комметировать</label>
              <textarea class="form-control" rows="3" v-model="comment.text" />
            </div>
            <button type="submit" class="btn btn-primary">Оправить</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  middleware: 'auth',
  head() {
    return {
      title: "Просмотр поста"
    };
  },
  async asyncData({ $axios, params }) {
    try {
      let post = await $axios.$get(`/posts/${params.id}`);
      return { post };
    } catch (e) {
      return { post: [] };
    }
  },
  data() {
    return {
      post: {
        title: "",
        picture: "",
        content: "",
        comments: [],
      },
      comment: {
        text: ""
      },
      error: null
    };
  },
  methods: {
    date(date_string) {
      return new Date(date_string).toLocaleDateString();
    },
    time(date_string) {
      return new Date(date_string).toLocaleTimeString();
    },
    async submitComment() {
      let data = {
        post: this.post.id,
        text: this.comment.text,
      }
      try {
        let response = await this.$axios.$post('/comments/', data);
        this.post.comments.push(response);
        this.comment.text = '';
        // this.$axios.$get(`/posts/${this.post.id}`);
      } catch (e) {
        console.log(e);
        this.error = e.response && e.response.data;
      }
    }
  },
};
</script>
<style scoped>
</style>
