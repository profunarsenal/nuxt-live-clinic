<template lang="pug">
    .container
        section-specialist(
            v-if="worker"
            :worker="worker"
        )
        .error-message(v-else) {{ $t("specialistError") }}

        ul.other-specialists
            card-worker(
                v-for="worker in otherWorkers"
                :key="worker.id"
                :worker="worker"
            )

        section-contacts
</template>

<script>
import { mapGetters } from 'vuex'
import SectionSpecialist from '~/components/pageSpecialist/SectionSpecialist'
import SectionContacts from '~/components/pageContacts/SectionContacts'
import CardWorker from '~/components/pageSpecialists/CardWorker'

export default {
    name: 'Specialist',

    components: {
        SectionSpecialist,
        SectionContacts,
        CardWorker
    },

    async fetch ({ store, $service }) {
        await store.dispatch('cache/cacheRequest', {
            key: 'workers',
            request: () => $service.workers.getWorkers()
        })
    },

    head () {
        return {
            title: this.worker?.name || this.$t('specialist')
        }
    },

    computed: {
        ...mapGetters('cache', ['workers']),

        otherWorkers () {
            return this.workers.filter(item => item.id !== +this.$route.query.id)
        },

        worker () {
            return this.workers.find(item => item.id === +this.$route.query.id)
        }
    },

    watch: {
        worker () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style lang="sass" scoped>
.container
    padding-top: 96px

.other-specialists
    display: grid
    grid-template-columns: repeat(3, 1fr)
    gap: 16px
    padding: 132px 0

@media (max-width: 1366px)
    .other-specialists
        padding: 100px 0

@media (max-width: 992px)
    .other-specialists
        padding: 72px 0

@media (max-width: 767px)
    .other-specialists
        grid-template-columns: repeat(auto-fit, 288px)
        justify-content: center
</style>