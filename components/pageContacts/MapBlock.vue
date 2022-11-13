<template lang="pug">
    client-only
        div(:class="mapClasses")
            yandex-map(
                :settings="settings"
                :coords="coords"
                :zoom="15"
                class="map"
            )
                ymap-marker(
                    :coords="coords"
                    marker-id="1"
                    hint-content="liveclinic"
                )
</template>

<script>
import { RU } from '~/helpers/constants'

export default {
    name: 'MapBlock',

    props: {
        isReverse: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            coords: [59.942034, 30.368647],
            settings: {
                apiKey: '',
                lang: 'ru_RU',
                coordorder: 'latlong',
                enterprise: false,
                version: '2.1'
            }
        }
    },

    computed: {
        mapClasses () {
            return ['map-block', { reverse: this.isReverse }]
        }
    },

    created () {
        this.setMapLanguage()
    },

    methods: {
        setMapLanguage () {
            const lang = this.$i18n.locale === RU ? 'ru_RU' : 'en_US'
            this.settings.lang = lang
        }
    }
}
</script>

<style lang="sass" scoped>
.map-block
    grid-column: 2/5
    border-radius: 20px
    overflow: hidden
    height: 576px

.map
    width: 100%
    height: 100%

@media (max-width: 767px)
    .map-block
        height: 400px

@media (max-width: 480px)
    .map-block
        height: 290px
</style>