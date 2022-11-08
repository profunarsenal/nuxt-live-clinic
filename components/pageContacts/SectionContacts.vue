<template lang="pug">
    client-only
        section(:class="contactsClasses")
            h2.section-title {{ $t("contacts.titleSection") }}

            .section-wrapper
                contacts-block(:isReverse="isReverse")
                map-block(:isReverse="isReverse")
</template>

<script>
import MapBlock from '@/components/pageContacts/MapBlock'
import ContactsBlock from '@/components/pageContacts/ContactsBlock'

export default {
    name: 'SectionContacts',

    components: {
        MapBlock,
        ContactsBlock
    },

    props: {
        isReverse: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        contactsClasses () {
            return ['section-contacts', { reverse: this.isReverse }]
        }
    }
}
</script>

<style lang="sass" scoped>
.section-contacts
    padding: 150px 0

    &.reverse
        padding-top: 0

    &.reverse > .section-title
        display: none

    &.reverse > .section-wrapper
        display: flex
        flex-direction: column

.section-title
    @extend .title
    margin-bottom: 72px

.section-wrapper
    display: grid
    grid-template-columns: repeat(4, 1fr)
    column-gap: 16px

@media (max-width: 1366px)
    .section-contacts
        padding: 100px 0

@media (max-width: 992px)
    .section-title
        margin-bottom: 40px
        text-align: center

    .section-wrapper
        display: flex
        flex-direction: column-reverse
        gap: 12px

@media (max-width: 767px)
    .section-contacts
        padding: 72px 0

        &.reverse > .section-wrapper
            flex-direction: column-reverse
</style>