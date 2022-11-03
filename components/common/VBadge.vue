<template lang="pug">
    div(:class="badgeClasses")
        span.badge-content
            slot

        v-icon.badge-icon(icon="badge")
</template>

<script>
import VIcon from '@/components/common/VIcon'

export default {
    name: 'VBadge',

    components: {
        VIcon
    },

    props: {
        type: {
            type: String,
            default: 'number',
            validator: (value) => {
                return ['number', 'discount-blue', 'discount-green'].includes(value)
            }
        }
    },

    computed: {
        badgeClasses () {
            return ['badge', this.type]
        }
    }
}
</script>

<style lang="sass" scoped>
.badge
    position: relative
    display: inline-block

.badge-icon
    width: 100%
    height: 100%

.badge-content
    position: absolute
    top: 50%
    left: 45%
    transform: translate(-55%, -50%)
    font-family: "Caveat", cursive
    color: $color-white

.number
    width: 64px
    height: 64px

    & > .badge-icon
        fill: $color-cyan

    & > .badge-content
        font-size: 34px

.discount-blue,
.discount-green
    width: 80px
    height: 80px

    & > .badge-content
        font-size: 30px
        letter-spacing: -0.05em
        transform: translate(-48%, -50%) rotate(10deg)

.discount-blue > .badge-icon
    fill: $color-cyan

.discount-green > .badge-icon
    fill: $color-darkgreen
</style>