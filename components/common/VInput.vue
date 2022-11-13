<template lang="pug">
    label.input-label
        v-icon.input-icon(
            v-if="icon"
            :icon="icon"
        )

        input(
            :class="inputClasses"
            :id="id"
            :type="type"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :value="value"
            v-imask="mask"
            @input="update"
            @blur="blur"
            @focus="focus"
            @accept="accept"
        )

        p.input-error(v-if="error") {{ error }}
</template>

<script>
import { IMaskDirective } from 'vue-imask'
import VIcon from '~/components/common/VIcon'

export default {
    name: 'VInput',

    components: {
        VIcon
    },
    
    directives: {
        imask: IMaskDirective
    },

    props: {
        value: {
            type: [String, Number],
            default: ''
        },

        id: {
            type: String,
            default: ''
        },

        icon: {
            type: String,
            default: ''
        },

        type: {
            type: String,
            default: 'text'
        },

        placeholder: {
            type: String,
            default: ''
        },

        error: {
            type: String,
            default: ''
        },

        maxlength: {
            type: String,
            default: ''
        },

        mask: {
            type: Object,
            default: () => {}
        }
    },

    emits: [
        'input',
        'onBlur',
        'onFocus',
        'onAccept'
    ],

    computed: {
        inputClasses () {
            return ['input', { 'not-valid': this.error }]
        }
    },

    methods: {
        update (event) {
            if (this.id === 'name') {
                event.target.value = event.target.value.replace(/[^\D]/gi, '')
            }

            this.$emit('input', event.target.value)
        },

        blur (event) {
            this.$emit('onBlur', event.target.value)
        },

        focus (event) {
            this.$emit('onFocus', event.target.value)
        },

        accept (event) {
            this.$emit('onAccept', event)
        }
    }
}
</script>

<style lang="sass">
.input-label
    position: relative
    display: block

.input-icon
    position: absolute
    top: 22px
    left: 28px
    fill: rgba($color-darkgray, 0.3)

.input
    width: 100%
    padding: 18px 24px 18px 64px
    font-weight: 500
    font-size: 18px
    line-height: 155%
    color: $color-dark
    border: 1px solid rgba($color-dark, 0.15)
    border-radius: 16px
    transition: all 0.3s ease

    &:hover
        border: 1px solid rgba($color-dark, 0.3)

    &::placeholder
        color: rgba($color-dark, 0.3)

    &:focus
        border: 1px solid $color-cyan

    &.not-valid
        border: 1px solid $color-red

.input-error
    position: absolute
    font-size: 12px
    top: -8px
    right: 10px
    background-color: $color-red
    color: $color-white
    padding: 4px 8px
    border-radius: 10px

@media (max-width: 576px)
    .input
        font-size: 16px
</style>