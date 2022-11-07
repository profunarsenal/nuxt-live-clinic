<template lang="pug">
    .container
        section-workers(:workers="workers")
        section-contacts
</template>

<script>
import { mapGetters } from 'vuex'
import SectionWorkers from '@/components/pageSpecialists/SectionWorkers'
import SectionContacts from '@/components/pageContacts/SectionContacts'

export default {
    name: 'Specialists',

    components: {
        SectionWorkers,
        SectionContacts
    },

    async fetch ({ store }) {
        await store.dispatch('cache/cacheRequest', 'workers')
    },

    head () {
        return {
            title: this.$t('titles.specialists')
        }
    },

    computed: {
        ...mapGetters('cache', ['workers'])
    }
}
</script>

<style lang="sass" scoped>
.container
    padding-top: 96px
</style>