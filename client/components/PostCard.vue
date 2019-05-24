
<template>
  <div class="card post-card">
    <img :src="post.picture" class="card-img-top" style="height:150px">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <div v-html="post.content"></div>
      <div class="action-buttons">
        <nuxt-link :to="`/posts/${post.id}/`" class="btn btn-sm btn-outline-info"> Просмотр </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ["post", "onDelete"]
};
</script>
<style>
.post-card {
    box-shadow: 0 1rem 1.5rem rgba(0,0,0,.6);
}
</style>
