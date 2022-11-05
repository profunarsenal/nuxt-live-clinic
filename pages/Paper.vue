<template lang="pug">
    .container
        section-article(:article="article")
        articles-slider(:articles="otherArticles")
        section-contacts
</template>

<script>
import SectionArticle from '@/components/pagePaper/SectionArticle'
import SectionContacts from '@/components/pageContacts/SectionContacts'
import ArticlesSlider from '@/components/pagePaper/ArticlesSlider'

export default {
    name: 'Paper',

    components: {
        SectionArticle,
        SectionContacts,
        ArticlesSlider
    },

    async fetch ({ store }) {
        if (!store.getters['articles/articles'].length) {
            await store.dispatch('articles/getArticles')
        }
    },

    computed: {
        otherArticles () {
            return this.$store.getters['articles/otherArticles'](this.$route.query.id)
        },

        article () {
            return this.$store.getters['articles/article'](this.$route.query.id)
        }
    },

    watch: {
        article () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    },

    mounted () {
        this.setTitle()
    },

    methods: {
        setTitle () {
            const title = this.article?.title || this.$t('titles.article')
            document.title = title
        }
    }
}
</script>

<style lang="sass" scoped>
.container
    padding-top: 96px
</style>