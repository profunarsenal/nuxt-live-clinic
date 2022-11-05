<template lang="pug">
    .wrapper
        AppHeader
        main.main
            Nuxt
        AppFooter
</template>

<script>
import AppHeader from '@/components/header/AppHeader'
import AppFooter from '@/components/footer/AppFooter'

export default {
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<style lang="sass" scoped>
.wrapper
    display: flex
    flex-direction: column
    min-width: 320px
    min-height: 100%
    font-family: "Manrope", sans-serif
    font-size: 16px
    color: $color-dark
    background-color: $color-white

.main
    flex: 1 1 auto
</style>