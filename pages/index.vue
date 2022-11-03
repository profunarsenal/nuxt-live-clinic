<template lang="pug">
  .home {{$t('lang')}}
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>

<style lang="sass" scoped>
.home
    font-family: 'Manrope', 'sans-serif'
</style>
