<template lang="pug">
    section.main-screen
        .container
            .section-wrapper
                .image-wrapper
                    img.image(
                        src="~/assets/images/main-screen.svg"
                        alt="illustration"
                    )

                .content
                    h1.title(v-html="$t('mainTitle')")

                    .buttons
                        v-button(
                            color="primary"
                            @click="openModal"
                        ) {{ $t("buttonEnroll") }}
                        v-button(
                            color="secondary"
                            @click="$router.push('/specialists')"
                        ) {{ $t("buttonChange") }}

        figure.figure.figure-first
        figure.figure.figure-second
        figure.figure.figure-third

        modal-entry(
            v-if="isOpenModal"
            @close="closeModal"
        )
</template>

<script>
import VButton from '~/components/common/VButton'
import ModalEntry from '~/components/modals/ModalEntry'

export default {
    name: 'MainScreen',

    components: {
        VButton,
        ModalEntry
    },

    data () {
        return {
            isOpenModal: false
        }
    },

    methods: {
        openModal () {
            this.isOpenModal = true
        },

        closeModal () {
            this.isOpenModal = false
        }
    }
}
</script>

<style lang="sass" scoped>
.main-screen
    position: relative
    overflow: hidden

.section-wrapper
    display: flex
    flex-direction: column
    padding: 120px 0 96px 0

.image-wrapper
    text-align: right

.image
    width: 740px
    height: 580px

.content
    position: relative
    z-index: 1
    margin-top: -170px

.title
    margin-bottom: 48px
    font-size: 88px
    line-height: 100%
    letter-spacing: -0.02em
    color: $color-dark

.buttons
    display: flex
    align-items: center
    justify-content: flex-start

    & > .button:not(:last-child)
            margin-right: 12px

.figure
    position: absolute
    z-index: 0

.figure-first
    top: 0
    left: 0
    width: 1556px
    height: 1556px
    transform: translate(-40%, -30%)
    background: radial-gradient(50% 50% at 50% 50%,rgba(110, 171, 64, 0.3) 0%,rgba(110, 171, 64, 0) 100%)

.figure-second
    top: 0
    right: 0
    width: 898px
    height: 898px
    transform: translate(60%, 0%)
    background: radial-gradient(50% 50% at 50% 50%,rgba(154, 195, 212, 0.5) 0%,rgba(154, 195, 212, 0) 100%)

.figure-third
    top: 0
    right: 0
    transform: translate(30%, 50%)
    width: 1242px
    height: 1242px
    background: radial-gradient(50% 50% at 50% 50%,rgba(154, 195, 212, 0.5) 0%,rgba(154, 195, 212, 0) 100%)

@media (max-width: 1366px)
    .section-wrapper
        padding: 110px 0 60px 0

@media (max-width: 1200px)
    .image
        width: 640px
        height: 480px

    .content
        margin-top: -130px

    .title
        margin-bottom: 38px
        font-size: 68px

@media (max-width: 992px)
    .image
        width: 540px
        height: 380px

    .content
        margin-top: -100px

    .title
        margin-bottom: 32px
        font-size: 56px

@media (max-width: 767px)
    .section-wrapper
        padding: 90px 0 40px 0

    .content
        margin-top: -70px

    .image
        width: 440px
        height: 280px

    .title
        margin-bottom: 32px
        font-size: 44px

    .figure-first
        width: 1000px
        height: 1000px
        transform: translate(-40%, -40%)

    .figure-second
        transform: translate(70%, 0%)

@media (max-width: 576px)
    .section-wrapper
        flex-direction: column
        padding: 90px 0 30px 0

    .content
        margin-top: 0

    .image-wrapper
        text-align: center

    .image
        width: 90%
        height: 90%

    .buttons
        flex-direction: column

        & > .button
            width: 100%

        & > .button:not(:last-child)
            margin-bottom: 12px
            margin-right: 0

    .figure-first
        transform: translate(-60%, -40%)

    .figure-second
        transform: translate(80%, 0%)

@media (max-width: 480px)
    .title
        font-size: 34px

    .image
        width: 100%
        height: 100%
</style>