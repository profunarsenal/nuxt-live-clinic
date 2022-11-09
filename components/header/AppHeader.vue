<template lang="pug">
    header(:class="headerClasses")
        .header-wrapper
            nuxt-link.logo(
                to="/"
            )
                img.logo-image(
                    src="@/assets/images/logo.svg"
                    alt="logo"
                )

            nav(:class="navigationClasses")
                ul.navigation-list(@click="closeMenu")
                    li.navigation-item
                        nuxt-link.navigation-link(
                            to="/"
                            active-class='active'
                            exact
                        ) {{ $t("main") }}

                    li.navigation-item
                        nuxt-link.navigation-link(
                            to="/services"
                            active-class='active'
                        ) {{ $t("services") }}

                    li.navigation-item
                        nuxt-link.navigation-link(
                            to="/specialists"
                            active-class='active'
                        ) {{ $t("specialists") }}

                    li.navigation-item
                        nuxt-link.navigation-link(
                            to="/info"
                            active-class='active'
                        ) {{ $t("info") }}

                    li.navigation-item
                        nuxt-link.navigation-link(
                            to="/contacts"
                            active-class='active'
                        ) {{ $t("contacts") }}

            .contacts
                .contacts-call
                    span.contacts-title +7 812 606-76-69
                    span.contacts-text {{ $t("callText") }}
                a.contacts-link(href="#")
                    v-icon.contacts-icon.icon-whatsapp(
                        icon="whatsapp"
                    )
                a.contacts-link(href="#")
                    v-icon.contacts-icon.icon-telegram(
                        icon="telegram"
                    )
                button.button-lang(@click="switchLang") {{ $t('lang') }}
            
            button.burger-button(@click="toggleMenu")
                v-icon(
                    v-if="isOpenMenu"
                    class="burger-icon"
                    icon="close"
                )
                v-icon(
                    v-else
                    class="burger-icon"
                    icon="burger"
                )
</template>

<script>
import VIcon from '@/components/common/VIcon'

export default {
    name: 'AppHeader',

    components: {
        VIcon
    },

    data () {
        return {
            positionY: 0,
            isOpenMenu: false
        }
    },

    computed: {
        headerClasses () {
            const classes = {
                    scroll: this.positionY,
                    open: this.isOpenMenu
                }

            return ['header', classes]
        },

        navigationClasses () {
            return ['navigation', { open: this.isOpenMenu }]
        }
    },

    watch: {
        isOpenMenu (newVal) {
            if (newVal) {
                document.body.classList.add('lock')
            } else {
                document.body.classList.remove('lock')
            }
        }
    },

    mounted () {
        window.addEventListener('scroll', this.scrollHandler)
    },

    methods: {
        closeMenu () {
            this.isOpenMenu = false
        },

        toggleMenu () {
            this.isOpenMenu = !this.isOpenMenu
        },

        scrollHandler () {
            this.positionY = window.scrollY
        },

        switchLang () {
            if (this.$i18n.locale === 'ru') {
                this.$cookies.set('i18n_redirected', 'en')
            } else {
                this.$cookies.set('i18n_redirected', 'ru')
            }

            window.location.reload()
        }
    }
}
</script>

<style lang="sass" scoped>
.header
    position: absolute
    z-index: 50
    top: 0
    left: 0
    width: 100%

    &.scroll
        position: fixed
        background-color: $color-white
        box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.1)

.header-wrapper
    display: flex
    align-items: center
    justify-content: space-between
    height: 96px
    padding: 0 32px

.logo
    position: relative
    z-index: 3
    width: 140px
    height: 64px
    margin-right: 20px

.logo-image
    width: 100%
    height: 100%

.navigation
    overflow: auto

.navigation-list
    display: flex
    align-items: center

.navigation-item:not(:last-child)
    margin-right: 24px

.navigation-link
    display: inline-block
    padding: 0 24px
    font-weight: 500
    font-size: 16px
    line-height: 175%
    color: $color-lightgray
    transition: all 0.3s ease

    &.active
        color: $color-dark

    @media (any-hover: hover)
        &:hover
            color: $color-darkgray

.contacts
    display: flex
    align-items: center

.contacts-call
    display: flex
    flex-direction: column
    margin-right: 20px
    text-align: right

.contacts-title
    font-weight: 600
    font-size: 24px
    line-height: 135%
    color: $color-dark

.contacts-text
    font-weight: 500
    font-size: 14px
    line-height: 115%
    color: $color-lightgray

.contacts-link:not(:last-child)
    margin-right: 8px

.contacts-icon
    fill: rgba($color-darkgray, 0.3)
    transition: all 0.3s ease

    @media (any-hover: hover)
        &:hover
            &.icon-whatsapp
                fill: $color-green

            &.icon-telegram
                fill: $color-blue

.button-lang
    display: flex
    align-items: center
    justify-content: center
    width: 25px
    height: 25px
    font-size: 14px
    color: $color-white
    background-color: rgba($color-darkgray, 0.3)
    border-radius: 50%
    transition: all 0.3s ease

    @media (any-hover: hover)
        &:hover
            background-color: rgba($color-red, 0.3)

.burger-button
    display: none

@media (max-width: 1366px)
    .navigation-link
        padding: 8px

@media (max-width: 1200px)
    .navigation-link
        padding: 0

    .navigation-item:not(:last-child)
        margin-right: 18px

    .contacts-call
        margin-right: 10px

    .contacts-title
        font-weight: 600
        font-size: 18px
        line-height: 135%
        color: $color-dark

@media (max-width: 992px)
    .contacts-call,
    .contacts-link
        display: none

    .logo
        width: 130px
        height: 54px

@media (max-width: 767px)
    .header
        &::after
            content: ""
            position: absolute
            z-index: 2
            top: -100%
            left: 0
            width: 100%
            height: 80px
            background-color: $color-white
            transition: all 0.3s ease

        &.open
            &::after
                top: 0

    .header-wrapper
        height: 80px
        padding: 0 16px

    .navigation
        position: fixed
        top: -100%
        left: 0
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center
        padding-top: 40px
        transition: all 0.3s ease
        background-color: $color-white

        &.open
            top: 0

    .navigation-list
        flex-direction: column

    .navigation-item:not(:last-child)
        margin-right: 0
        margin-bottom: 32px

    .navigation-link
        font-weight: 500
        font-size: 20px
        line-height: 175%

    .contacts
        margin-left: auto
        margin-right: 20px

    .burger-button
        position: relative
        z-index: 3
        display: block
        background-color: transparent

    .burger-icon
        width: 24px
        height: 24px
</style>