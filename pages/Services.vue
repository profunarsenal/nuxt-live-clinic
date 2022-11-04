<template lang="pug">
    .container
        section-price(:services="services")
        section-contacts
</template>

<script>
import SectionPrice from '@/components/pageServices/SectionPrice'
import SectionContacts from '@/components/pageContacts/SectionContacts'

export default {
    name: 'Services',

    components: {
        SectionPrice,
        SectionContacts
    },

    async fetch ({ store }) {
        if (!store.getters['services/services'].length) {
            await store.dispatch('services/getServices')
        }
    },

    computed: {
        services () {
            return this.$store.getters['services/services']
        }
    },

    mounted () {
        this.setTitle()
    },

    methods: {
        setTitle () {
            document.title = this.$t('titles.services')
        }
    }
}
</script>

<style lang="sass" scoped>
.container
    padding-top: 96px
</style>