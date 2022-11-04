<template lang="pug">
    .container
        section-questions(:spollers="spollers")
        section-articles(:articles="articles")
        section-contacts
</template>

<script>
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
        if (!store.getters['spollers/spollers'].length) {
            await store.dispatch('spollers/getSpollers')
        }

        if (!store.getters['articles/articles'].length) {
            await store.dispatch('articles/getArticles')
        }
    },

    computed: {
        spollers () {
            return this.$store.getters['spollers/spollers']
        },

        articles () {
            return this.$store.getters['articles/articles']
        }
    },

    mounted () {
        this.setTitle()
    },

    methods: {
        setTitle () {
            document.title = this.$t('titles.info')
        }
    }
}
</script>

<style lang="sass" scoped>
.container
    padding-top: 96px
</style>