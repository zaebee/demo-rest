<template>
  <div>
    <b-container fluid>
    </b-container>

    <b-container>
      <footer-nav/>
    </b-container>
  </div>
</template>

<script>
  import FooterNav from '~/components/FooterNav.vue'

  export default {
    head() {
      return {
        title: "Команда разработки web-сайтов и рекламного продвижения в direct/adwords"
      };
    },
    data () {
      return {
        visibleForm: false
      }
    },
    components: {
      FooterNav,
    },
    methods: {
    }
  };
</script>

<style scoped>
</style>
