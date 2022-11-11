<template lang="pug">
    nuxt-link(
        class="card-article"
        :to="`/paper?id=${article.id}`"
    )
        v-tag(:color="article.class") {{ article.tag }}

        h5.card-title {{ article.title }}

        p.card-description {{ article.description }}

        .card-time
            span {{ article.date }} • {{ article.time }}
            span  {{ $tc("minutes", defineMinutes) }} {{ $t("read") }}
</template>

<script>
import pluralization from '~/mixins/pluralization'
import VTag from '~/components/common/VTag'

export default {
    name: 'CardArticle',

    components: {
        VTag
    },

    props: {
        article: {
            type: Object,
            required: true
        }
    },

    mixins: [pluralization]
}
</script>

<style lang="sass" scoped>
.card-article
    display: flex
    flex-direction: column
    align-items: flex-start

.card-title
    margin-bottom: 12px
    font-weight: 700
    font-size: 24px
    line-height: 135%
    color: $color-dark
    overflow: hidden
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 3
    line-clamp: 3
    -webkit-box-orient: vertical

.card-description
    margin-bottom: 24px
    line-height: 175%
    color: $color-lightgray
    overflow: hidden
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 3
    line-clamp: 3
    -webkit-box-orient: vertical

.card-time
    font-weight: 500
    font-size: 14px
    line-height: 115%
    color: $color-cyan
</style>