<template lang="pug">
    .container
        section-questions(:spollers="spollers")
        section-articles(:articles="articles")
        section-contacts
</template>

<script>
import { mapGetters } from 'vuex'
import { scrollToSection } from '@/helpers/scrollToSection'
import SectionQuestions from '@/components/pageInfo/SectionQuestions'
import SectionArticles from '@/components/pageInfo/SectionArticles'
import SectionContacts from '@/components/pageContacts/SectionContacts'

export default {
    name: 'Info',

    components: {
        SectionQuestions,
        SectionArticles,
        SectionContacts
    },

    async fetch ({ store }) {
        await store.dispatch('cache/cacheRequest', 'spollers')
        await store.dispatch('cache/cacheRequest', 'articles')
    },

    head () {
        return {
            title: this.$t('titles.info')
        }
    },

    computed: {
        ...mapGetters('cache', ['spollers', 'articles'])
    },

    mounted () {
        if (this.$route.query.section) {
            scrollToSection(this.$route.query.section)
        }
    }
}
</script>

<style lang="sass" scoped>
.container
    padding-top: 96px
</style>