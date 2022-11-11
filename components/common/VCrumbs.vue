<template lang="pug">
    .crumbs
        nuxt-link.crumbs-item(:to="link") {{ lastPage }}
        span.crumbs-item {{ currentPage }}
</template>

<script>
export default {
    name: 'VCrumbs',

    props: {
        link: {
            type: String,
            required: true
        },

        lastPage: {
            type: String,
            required: true
        },

        currentPage: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="sass" scoped>
.crumbs
    display: flex
    flex-wrap: wrap
    align-items: flex-start
    justify-content: flex-start
    margin-bottom: 40px

.crumbs-item
    font-weight: 600
    line-height: 150%
    transition: all 0.3s ease

    &:not(:last-child)
        position: relative
        margin-right: 36px
        font-weight: 400
        color: $color-lightgray

        &::after
            content: ""
            position: absolute
            top: 5px
            right: -26px
            width: 16px
            height: 16px
            background-image: url("~/static/images/crumb.svg")

    @media (any-hover: hover)
        &:hover
            color: $color-dark

@media (max-width: 767px)
    .crumbs
        align-self: flex-start
</style>