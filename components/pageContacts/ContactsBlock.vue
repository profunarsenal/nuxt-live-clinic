<template lang="pug">
    div(:class="contactsClasses")
        ul.contacts-list
            li.contacts-item(
                v-for="item in contacts"
                :key="item.title"
            )
                v-icon.contacts-icon(:icon="item.icon")

                .contacts-info
                    p.contacts-title {{ item.title }}
                    p.contacts-description(v-html="item.subtitle")

        v-button.contacts-button(
            color="primary"
            @click="openModal"
        )   {{ $t("buttonEnroll") }}

        modal-entry(
            v-if="isOpenModal"
            @close="closeModal"
        )
</template>

<script>
import VIcon from '~/components/common/VIcon'
import VButton from '~/components/common/VButton'
import ModalEntry from '~/components/modals/ModalEntry'

export default {
    name: 'ContactsBlock',

    components: {
        VIcon,
        VButton,
        ModalEntry
    },

    props: {
        isReverse: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            contacts: this.$t('contactsItems'),
            isOpenModal: false
        }
    },

    computed: {
        contactsClasses () {
            return ['contacts-block', { reverse: this.isReverse }]
        }
    },

    methods: {
        openModal () {
            this.isOpenModal = true
        },

        closeModal () {
            this.isOpenModal = false
        }
    }
}
</script>

<style lang="sass" scoped>
.contacts-block
    &.reverse > .contacts-list
        display: grid
        grid-template-columns: repeat(4, 1fr)
        gap: 16px

    &.reverse * .contacts-item
        position: relative
        align-items: flex-end
        padding: 136px 24px 24px 24px
        margin-bottom: 0

    &.reverse * .contacts-icon
        position: absolute
        top: 24px
        left: 24px

    &.reverse > .contacts-button
        display: none

.contacts-list
    display: flex
    flex-direction: column
    margin-bottom: 12px

.contacts-item
    display: flex
    align-items: center
    padding: 24px
    background-color: $color-whitesmoke
    border-radius: 20px

    &:not(:last-child)
        margin-bottom: 12px

.contacts-icon
    margin-right: 16px
    fill: $color-cyan

.contacts-info
    display: flex
    flex-direction: column

.contacts-title
    margin-bottom: 8px
    font-weight: 600
    font-size: 16px
    line-height: 150%

.contacts-description
    line-height: 150%
    color: rgba($color-darkgray, 0.8)

.contacts-button
    white-space: nowrap

@media (max-width: 1366px)
    .contacts-block
        &.reverse * .contacts-item
            padding: 106px 24px 24px 24px

@media (max-width: 992px)
    .contacts-block
        &.reverse > .contacts-list
            grid-template-columns: repeat(2, 1fr)
            grid-template-rows: repeat(2, 1fr)

    .contacts-list
        display: grid
        grid-template-columns: 1fr 1fr
        grid-template-rows: 1fr 1fr
        gap: 12px

    .contacts-item
        &:not(:last-child)
            margin-bottom: 0

    .contacts-button
        margin: 0 auto

@media (max-width: 767px)
    .contacts-block
        &.reverse > .contacts-list
            grid-template-columns: 1fr
            grid-template-rows: repeat(4, 1fr)

    .contacts-list
        grid-template-columns: 1fr
        grid-template-rows: repeat(4, 1fr)
        gap: 12px

    .contacts-button
        width: 100%

@media (max-width: 480px)
    .contacts-block
        &.reverse * .contacts-item
            flex-direction: row

    .contacts-item
        flex-direction: column
        align-items: flex-start
        justify-content: space-between

    .contacts-icon
        margin-bottom: 20px
</style>