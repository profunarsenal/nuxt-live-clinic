<template lang="pug">
    .container
        .contacts-header
            h2.title {{ $t("contacts") }}

            img.contacts-image(
                src="@/assets/images/contacts.svg"
                alt="illustration"
            )

            v-icon.contacts-icon(icon="arrow")

        section-contacts(isReverse)
</template>

<script>
import VIcon from '@/components/common/VIcon'
import SectionContacts from '@/components/pageContacts/SectionContacts'

export default {
    name: 'Contacts',

    components: {
        VIcon,
        SectionContacts
    },

    head () {
        return {
            title: this.$t('contacts')
        }
    }

}
</script>

<style lang="sass" scoped>
.container
    padding-top: 96px

.contacts-header
    position: relative
    display: flex
    align-items: center
    justify-content: space-between
    flex-wrap: nowrap
    margin-bottom: 72px

.contacts-image
    width: 500px
    height: 500px
    object-fit: cover

.contacts-icon
    position: absolute
    bottom: 26px
    left: 0
    fill: $color-dark
    transform: rotate(90deg)

@media (max-width: 1366px)
    .contacts-image
        width: 400px
        height: 400px

@media (max-width: 992px)
    .contacts-header
        margin-bottom: 40px

    .contacts-image
        width: 300px
        height: 300px

@media (max-width: 767px)
    .contacts-header
        flex-direction: column-reverse

    .contacts-icon
        display: none
</style>