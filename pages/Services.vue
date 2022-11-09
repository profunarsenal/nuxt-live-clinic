<template lang="pug">
    .container
        section-price(
            v-if="services.length"
            :services="services"
        )
        .error-message(v-else) {{ $t("services.error") }}

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

    async fetch ({ store, $service }) {
        await store.dispatch('cache/cacheRequest', {
            key: 'services',
            request: () => $service.services.getServices()
        })
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