<template lang="pug">
    .container
        section-price(:services="services")
        section-contacts
</template>

<script>
import { mapGetters } from 'vuex'
import SectionPrice from '@/components/pageServices/SectionPrice'
import SectionContacts from '@/components/pageContacts/SectionContacts'

export default {
    name: 'Services',

    components: {
        SectionPrice,
        SectionContacts
    },

    async fetch ({ store }) {
        await store.dispatch('cache/cacheRequest', 'services')
    },

    head () {
        return {
            title: this.$t('titles.services')
        }
    },

    computed: {
        ...mapGetters('cache', ['services'])
    }
}
</script>

<style lang="sass" scoped>
.container
    padding-top: 96px
</style>