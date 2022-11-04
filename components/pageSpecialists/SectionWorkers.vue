<template lang="pug">
    .workers(v-if="workers.length")
        .workers-header
            h2.title(v-html="$t('specialists.title')")
            img.image(
                src="@/assets/images/workers.svg"
                alt="illustration"
            )
            v-icon.worker-icon(icon="arrow")

        ul.workers-cards
            card-worker(
                v-for="card in workers"
                :key="card.id"
                :worker="card"
            )
    .error-message(v-else) {{ $t("specialists.error") }}
</template>

<script>
import VIcon from '@/components/common/VIcon'
import CardWorker from '@/components/pageSpecialists/CardWorker'
export default {
    name: 'SectionWorkers',

    components: {
        VIcon,
        CardWorker
    },

    props: {
        workers: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="sass" scoped>
.workers-header
    position: relative
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 72px

.image
    width: 500px
    height: 420px

.workers-icon
    position: absolute
    bottom: 0
    left: 0
    fill: $color-dark
    transform: rotate(90deg)

.workers-cards
    display: grid
    grid-template-columns: repeat(4, 1fr)
    gap: 16px

.error-message
    padding-top: 100px
    font-size: 24px

@media (max-width: 1200px)
    .image
        width: 450px
        height: 370px

@media (max-width: 992px)
    .workers-header
        margin-bottom: 40px

    .image
        width: 400px
        height: 320px

@media (max-width: 767px)
    .workers-cards
        grid-template-columns: repeat(2, 268px)
        grid-template-rows: repeat(2, 1fr)
        justify-content: center

    .workers-icon
        display: none

    .image
        width: 288px
        height: 230px

    .workers-header
        flex-direction: column-reverse
        text-align: center

@media (max-width: 576px)
    .workers-card
        grid-template-columns: repeat(1, minmax(268px, 300px))
        grid-template-rows: repeat(4, 1fr)
</style>