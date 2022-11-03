<template lang="pug">
  .home
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'IndexPage',

    components: {
        
    }
})
</script>

<style lang="sass" scoped>
.container
  padding-bottom: 150px

@media (max-width: 1366px)
  .container
    padding-bottom: 100px

@media (max-width: 992px)
  .container
    padding-bottom: 72px
</style>