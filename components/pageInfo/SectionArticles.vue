<template lang="pug">
    section.articles
        .articles-header
            h2.articles-title {{ $t("articles") }}

            img.image(
                src="images/articles.svg"
                alt="illustration"
            )

        .articles-list
            card-article(
                v-for="article in articles"
                :key="article.id"
                :article="article"
            )
</template>

<script>
import CardArticle from '~/components/pagePaper/CardArticle'

export default {
    name: 'SectionArticles',

    components: {
        CardArticle
    },

    props: {
        articles: {
            type: Array,
            default: () => []
    }
  }
}
</script>

<style lang="sass" scoped>
.articles
    padding: 100px 0 150px

.articles-header
    position: relative

.articles-title
    @extend .title
    margin-bottom: 72px

.image
    position: absolute
    top: -100px
    right: 0

.articles-list
    display: grid
    justify-content: center
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr))
    row-gap: 72px
    column-gap: 48px

@media (max-width: 1366px)
    .articles
        padding: 100px 0

@media (max-width: 767px)
    .articles
        padding: 72px 0 20px

    .articles-header
        display: flex
        flex-direction: column-reverse
        align-items: center
        justify-content: center

    .image
        position: relative
        top: 0
        margin-bottom: 40px
</style>