<template lang="pug">
    section.article
        v-crumbs(
            link="/info"
            :lastPage="$t('info')"
            :currentPage="article.title"
        )

        v-tag(:color="article.class") {{ article.tag }}

        h2.article-title {{ article.title }}

        .info
            img.avatar(
                :src="article.img"
                alt="avatar"
            )

            .author
                p.author-name {{ article.author }}
                p.time
                    span {{ article.date }} • {{ article.time }}
                    span  {{ $tc("minutes", defineMinutes) }} {{ $t("read") }}
        
        .content
            .description {{ article.description }}

            ul.description-list
                li.description-item(
                    v-for="item in article.articles"
                    :key="item.title"
                )
                    h4.description-title {{ item.title }}
                    p.description-text {{ item.description }}
</template>

<script>
import pluralization from '@/mixins/pluralization'
import VTag from '@/components/common/VTag'
import VCrumbs from '@/components/common/VCrumbs'

export default {
    name: 'SectionArticle',

    components: {
        VTag,
        VCrumbs
    },

    props: {
        article: {
            type: Object,
            default: () => {}
        }
    },

    mixins: [pluralization]
}
</script>

<style lang="sass" scoped>
.article
    display: flex
    flex-direction: column
    align-items: flex-start
    max-width: 742px
    margin: 0 auto
    padding: 88px 0 132px 0

.article-title
    @extend .title
    margin-bottom: 24px

.info
    display: flex
    align-items: center
    margin-bottom: 64px

.avatar
    width: 56px
    height: 56px
    margin-right: 16px
    border-radius: 50%
    object-fit: cover
    overflow: hidden

.author
    display: flex
    flex-direction: column

.author-name
    margin-bottom: 4px
    font-weight: 600
    font-size: 18px
    line-height: 155%

.time
    font-weight: 600
    line-height: 150%
    color: $color-lightgray

.description
    margin-bottom: 40px
    font-weight: 500
    font-size: 20px
    line-height: 175%
    color: $color-darkgray

.description-item:not(:last-child)
    margin-bottom: 40px

.description-title
    margin-bottom: 12px
    font-weight: 700
    font-size: 32px
    line-height: 140%

.description-text
    font-weight: 500
    font-size: 20px
    line-height: 175%
    color: $color-darkgray

@media (max-width: 1366px)
    .article
        padding: 40px 0 100px 0

@media (max-width: 767px)
    .article
        padding: 0 0 72px 0
        align-items: center

    .article-title
        text-align: center

    .info
        flex-direction: column
        text-align: center

    .avatar
        margin-right: 0
        margin-bottom: 16px

    .description-title
        font-size: 24px
        line-height: 135%
</style>