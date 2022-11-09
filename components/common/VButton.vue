<template lang="pug">
    button(
        :class="buttonClasses"
        @click="click"
    )
        slot

        v-icon(
            v-if="icon"
            :class="iconClasses"
            :icon="icon"
        )
</template>

<script>
import VIcon from '~/components/common/VIcon'

export default {
    name: 'VButton',

    components: {
        VIcon
    },

    props: {
        icon: {
            type: String,
            default: ''
        },

        color: {
            type: String,
            default: 'primary',
            validator: value => {
                return ['primary', 'secondary', 'whatsapp', 'telegram'].includes(value)
            }
        }
    },

    emits: ['click'],

    computed: {
        iconClasses () {
            return ['button-icon', `icon-${this.icon}`]
        },

        buttonClasses () {
            return ['button', `button-${this.color}`]
        }
    },

    methods: {
        click (event) {
            this.$emit('click', event)
        }
    }
}
</script>

<style lang="sass" scoped>
.button
    position: relative
    display: flex
    align-items: center
    justify-content: center
    padding: 20px 57px
    font-weight: 600
    font-size: 18px
    line-height: 135%
    border-radius: 16px
    transition: all 0.3s ease

.button-primary
    color: $color-white
    background: $color-cyan

    @media (any-hover: hover)
        &:hover
            background: $color-cyanlight

.button-secondary
    color: $color-dark
    background: $color-white
    border: 1px solid $color-cyan

    @media (any-hover: hover)
        &:hover
            background: $color-aliceblue

.button-whatsapp
    color: $color-white
    background: $color-green

    @media (any-hover: hover)
        &:hover
            background: $color-lightgreen

.button-telegram
    color: $color-white
    background: $color-blue

    @media (any-hover: hover)
        &:hover
            background: $color-lightblue

.button-icon
    margin-left: 10px

    &.icon-telegram
        fill: rgba($color-dark, 0.2)

    &.icon-whatsapp
        fill: rgba(102, 112, 133, 0.3)

@media (max-width: 992px)
    .button
        padding: 18px 46px

@media (max-width: 767px)
    .button
        padding: 18px 24px

@media (max-width: 480px)
    .button
        font-size: 16px
</style>