<template lang="pug">
    .container
        section-workers(
            v-if="workers.length"
            :workers="workers"
        )
        .error-message(v-else) {{ $t("specialists.error") }}

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

    async fetch ({ store, $service }) {
        await store.dispatch('cache/cacheRequest', {
            key: 'workers',
            request: () => $service.workers.getWorkers()
        })
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