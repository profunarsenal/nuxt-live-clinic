<template lang="pug">
    .price(v-if="services.length")
        .price-header
            h2.title {{ $t("services.title") }}
            img.image(
                src="@/assets/images/price.svg"
                alt="illustration"
            )
            v-icon.price-icon(icon="arrow")

        ul.price-items
            card-service(
                v-for="service in services"
                :key="service.id"
                :service="service"
            )

    .error-message(v-else) {{ $t("services.error") }}
</template>

<script>
import VIcon from '@/components/common/VIcon'
import CardService from '@/components/pageServices/CardService'

export default {
    name: 'SectionPrice',

    components: {
        VIcon,
        CardService
    },

    props: {
        services: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="sass" scoped>
.price-header
    position: relative
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 72px

.image
    width: 500px
    height: 500px
    object-fit: cover

.price-icon
    position: absolute
    bottom: 30px
    left: 0
    fill: $color-dark
    transform: rotate(90deg)

.price-items
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(268px, 1fr))
    gap: 16px

.error-message
    padding-top: 100px
    font-size: 24px

@media (max-width: 1366px)
    .image
        width: 400px
        height: 400px

@media (max-width: 992px)
    .price-header
        margin-bottom: 40px

    .image
        width: 300px
        height: 300px

    .price-items
        justify-content: center

@media (max-width: 767px)
    .price-header
        flex-direction: column-reverse

    .price-icon
        display: none

    .price-items
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr))

@media (max-width: 480px)
    .image
        width: 288px
        height: 176px
</style>