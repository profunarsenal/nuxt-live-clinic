<template lang="pug">
  .home
    main-screen
    section-about
    section-profile
    section-methods
    section-solutions
    section-workers.section(:workers="workers")
    section-entry
    section-contacts.section
</template>

<script>
import Vue from 'vue'
import MainScreen from '@/components/pageHome/MainScreen'
import SectionAbout from '@/components/pageHome/SectionAbout'
import SectionProfile from '@/components/pageHome/SectionProfile'
import SectionMethods from '@/components/pageHome/SectionMethods'
import SectionSolutions from '@/components/pageHome/SectionSolutions'
import SectionWorkers from '@/components/pageSpecialists/SectionWorkers'
import SectionEntry from '@/components/pageHome/SectionEntry'
import SectionContacts from '@/components/pageContacts/SectionContacts'

export default Vue.extend({
    name: 'IndexPage',

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

    async mounted () {
        this.setTitle()
        
        if (this.$route.query.section) {
            await this.scrollToSection()
        }
    },

    methods: {
        scrollToSection () {
            setTimeout(() => {
                const section = document.querySelector(`.${this.$route.query.section}`)
                const position = section.getBoundingClientRect().top

                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                })
            })
        },

        setTitle () {
            document.title = 'liveclinic'
        }
    }
})
</script>

<style lang="sass" scoped>
.section
    @extend .container
    padding-bottom: 150px

@media (max-width: 1366px)
    .section
        padding-bottom: 100px

@media (max-width: 992px)
    .section
        padding-bottom: 72px
</style>