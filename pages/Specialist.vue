<template lang="pug">
    .container
        section-specialist(:worker="worker")

        ul.other-specialists
            card-worker(
                v-for="worker in otherWorkers"
                :key="worker.id"
                :worker="worker"
            )

        section-contacts
</template>

<script>
import SectionSpecialist from '@/components/pageSpecialist/SectionSpecialist'
import SectionContacts from '@/components/pageContacts/SectionContacts'
import CardWorker from '@/components/pageSpecialists/CardWorker'

export default {
    name: 'Specialist',

    components: {
        SectionSpecialist,
        SectionContacts,
        CardWorker
    },

    async fetch ({ store }) {
        if (!store.getters['workers/workers'].length) {
            await store.dispatch('workers/getWorkers')
        }
    },

    computed: {
        otherWorkers () {
            return this.$store.getters['workers/otherWorkers'](this.$route.query.id)
        },

        worker () {
            return this.$store.getters['workers/worker'](this.$route.query.id)
        }
    },

    mounted () {
        this.setTitle()
    },

    methods: {
        setTitle () {
            const title = this.worker?.name || this.$t('titles.specialist')
            document.title = title
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

.worker-loader
    padding: 200px 0

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