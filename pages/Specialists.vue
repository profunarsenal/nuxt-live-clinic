<template lang="pug">
    .container
        section-workers(:workers="workers")
        section-contacts
</template>

<script>
import SectionWorkers from '@/components/pageSpecialists/SectionWorkers'
import SectionContacts from '@/components/pageContacts/SectionContacts'

export default {
    name: 'Specialists',

    components: {
        SectionWorkers,
        SectionContacts
    },

    async fetch ({ store }) {
        if (!store.getters['workers/workers'].length) {
            await store.dispatch('workers/getWorkers')
        }
    },

    head () {
        return {
            title: this.$t('titles.specialists')
        }
    },

    computed: {
        workers () {
            return this.$store.getters['workers/workers']
        }
    }
}
</script>

<style lang="sass" scoped>
.container
    padding-top: 96px
</style>