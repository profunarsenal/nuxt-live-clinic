<template lang="pug">
    li(:class="cardClasses")
        v-icon.card-icon(icon="check")
        
        h6.card-title {{ service.title }}

        .card-info
            span.card-time {{ service.time }}
            span.card-value {{ service.price }}₽

        v-badge.card-badge(
            v-if="service.discount"
            :type="service.type"
        ) {{ `-${service.discount}%` }}
</template>

<script>
import VIcon from '~/components/common/VIcon'
import VBadge from '~/components/common/VBadge'

export default {
    name: 'CardService',

    components: {
        VIcon,
        VBadge
    },

    props: {
        service: {
            type: Object,
            default: () => {}
        }
    },

    computed: {
        cardClasses () {
            return ['card-service', this.service.type]
        }
    }
}
</script>

<style lang="sass" scoped>
.card-service
    position: relative
    display: flex
    flex-direction: column
    justify-content: flex-end
    padding: 152px 24px 24px 24px
    border-radius: 20px
    background-color: $color-whitesmoke

    &.discount-blue
        background-color: rgba($color-cyan, 0.2)

    &.discount-green
        background: rgba($color-green, 0.1)

    &.discount-green > .card-icon
        fill: rgba($color-green, 0.4)

.card-icon
    position: absolute
    top: 24px
    left: 24px
    fill: $color-cyan

.card-title
    margin-bottom: 24px
    font-size: 18px
    line-height: 155%

.card-info
    display: flex
    align-items: flex-end
    justify-content: space-between

.card-time
    font-weight: 600
    font-size: 16px
    line-height: 150%
    color: $color-lightgray

.card-value
    font-weight: 600
    font-size: 24px
    line-height: 135%

.card-badge
    position: absolute
    top: -10px
    right: -10px
</style>