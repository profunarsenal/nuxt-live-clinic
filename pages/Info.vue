<template lang="pug">
    .container
        section-questions(
            v-if="spollers.length"
            :spollers="spollers"
        )
        .error-message(v-else) {{ $t("questions.error") }}

        section-articles(
            v-if="articles.length"
            :articles="articles"
        )
        .error-message(v-else) {{ $t("articles.error") }}

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

    async fetch ({ store, $service }) {
        await store.dispatch('cache/cacheRequest', {
            key: 'spollers',
            request: () => $service.spollers.getSpollers()
        })
        await store.dispatch('cache/cacheRequest', {
            key: 'articles',
            request: () => $service.articles.getArticles()
        })
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