<template>
  <div>
    <navbar-top
      @show-lead="showLeadForm"
      @hide-lead="hideLeadForm"
    />
    <nuxt/>
  </div>
</template>

<script>
  import NavbarTop from '~/components/NavbarTop.vue'

  export default {
    data () {
      return {
        visibleForm: false
      }
    },
    components: {
      NavbarTop,
    },
    methods: {
      showLeadForm (source) {
        this.visibleForm = true
        console.log('show', source)
      },
      hideLeadForm (source) {
        this.visibleForm = false
        console.log('hide', source)
      }
    }
  };
</script>
<style>
</style>
