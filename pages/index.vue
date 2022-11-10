<template lang="pug">
  .home
    main-screen
    section-about
    section-profile
    section-methods
    section-solutions

    section-workers.section(
        v-if="workers.length"
        :workers="workers"
    )
    .error-message(v-else) {{ $t("specialistsError") }}

    section-entry
    section-contacts.section
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { scrollToSection } from '~/helpers/scrollToSection'
import MainScreen from '~/components/pageHome/MainScreen'
import SectionAbout from '~/components/pageHome/SectionAbout'
import SectionProfile from '~/components/pageHome/SectionProfile'
import SectionMethods from '~/components/pageHome/SectionMethods'
import SectionSolutions from '~/components/pageHome/SectionSolutions'
import SectionWorkers from '~/components/pageSpecialists/SectionWorkers'
import SectionEntry from '~/components/pageHome/SectionEntry'
import SectionContacts from '~/components/pageContacts/SectionContacts'

export default Vue.extend({
    name: 'Index',

    components: {
        MainScreen,
        SectionAbout,
        SectionProfile,
        SectionMethods,
        SectionSolutions,
        SectionWorkers,
        SectionEntry,
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
            title: 'liveclinic'
        }
    },

    computed: {
        ...mapGetters('cache', ['workers'])
    },

    mounted () {
        if (this.$route.query.section) {
            scrollToSection(this.$route.query.section)
        }
    }
})
</script>

<style lang="sass" scoped>
.section
    @extend .container
    padding-bottom: 150px

.error-message
    @extend .container

@media (max-width: 1366px)
    .section
        padding-bottom: 100px

@media (max-width: 992px)
    .section
        padding-bottom: 72px
</style>