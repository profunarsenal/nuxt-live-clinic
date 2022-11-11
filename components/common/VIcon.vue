<template lang="pug">
    svg.icon
        use(:xlink:href="'icons/sprite.svg#' + icon")
</template>

<script>
export default {
    name: 'VIcon',

    props: {
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="sass" scoped>
.icon
    width: 24px
    height: 24px
</style>