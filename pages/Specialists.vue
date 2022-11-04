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

    computed: {
        workers () {
            return this.$store.getters['workers/workers']
        }
    },

    mounted () {
        this.setTitle()
    },

    methods: {
        setTitle () {
            document.title = this.$t('titles.specialists')
        }
    }
}
</script>

<style lang="sass" scoped>
.container
    padding-top: 96px
</style>