<template lang="pug">
    div(:class="tagClasses")
        slot
</template>

<script>
export default {
    name: 'VTag',

    props: {
        color: {
            type: String,
            default: 'psychoanalysis',
            validator: value => {
                return [
                'psychoanalysis',
                'organism',
                'memory',
                'family',
                'relations'
                ].includes(value)
            }
        }
    },

    computed: {
        tagClasses () {
            return ['tag', this.color]
        }
    }
}
</script>

<style lang="sass" scoped>
.tag
    position: relative
    padding: 5px 8px 5px 18px
    margin-bottom: 16px
    font-weight: 500
    font-size: 14px
    line-height: 115%
    border-radius: 16px

    &::before
        content: ""
        position: absolute
        top: 11px
        left: 6px
        width: 6px
        height: 6px
        border-radius: 50%

    &.psychoanalysis
        color: #5925dc
        background-color: #f4f3ff

        &::before
            background-color: #5925dc

    &.organism
        color: #b42318
        background-color: #fef3f2

        &::before
            background-color: #b42318

    &.memory
        color: #b54708
        background-color: #fffaeb

        &::before
            background-color: #b54708

    &.family
        color: #c01048
        background-color: #fff1f3

        &::before
            background-color: #c01048

    &.relations
        color: #027a48
        background-color: #ecfdf3

        &::before
            background-color: #027a48
</style>