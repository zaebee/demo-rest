<template>
  <main class="container mt-5">
    <div class="row">
      <div class="col-12 text-right mb-4">
        <div class="d-flex justify-content-between">
          <h3>Посты</h3>
          <nuxt-link to="/posts/add" class="btn btn-outline-secondary">Создать пост</nuxt-link>
        </div>
      </div>
      <template v-for="post in posts">
        <div :key="post.id" class="col-lg-3 col-md-4 col-sm-6 mb-4">
          <post-card :onDelete="deletePost" :post="post"></post-card>
        </div>
      </template>
    </div>
  </main>
</template>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  middleware: 'auth',
  head() {
    return {
      title: "Posts list"
    };
  },
  components: {
    PostCard
  },
  async asyncData({ $axios, params }) {
    try {
      let posts = await $axios.$get(`/posts/`);
      return { posts };
    } catch (e) {
      return { posts: [] };
    }
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    async deletePost(post_id) {
      try {
        await this.$axios.$delete(`/posts/${post_id}/`); // delete post
        let newPosts = await this.$axios.$get("/posts/"); // get new list of posts
        this.posts = newPosts; // update list of posts
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>
</style>
