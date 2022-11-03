<template lang="pug">
    footer.footer
        .container
            .footer-top
                a.logo(@click="goToPage('/')")
                    img.logo-image(
                        src="@/assets/images/logo.svg"
                        alt="logotype"
                    )

                nav.navigation
                    ul.navigation-list
                        li.navigation-item
                            a.navigation-link(
                                href="#"
                                @click.prevent="goToSection('/', 'about-inner')"
                            )   {{ $t("footer.navLinks.about") }}
                        li.navigation-item
                            a.navigation-link(
                                href="#"
                                @click.prevent="goToPage('/info')"
                            )   {{ $t("footer.navLinks.questions") }}
                        li.navigation-item
                            a.navigation-link(
                                href="#"
                                @click.prevent="goToPage('/services')"
                            )   {{ $t("footer.navLinks.services") }}
                        li.navigation-item
                            a.navigation-link(
                                href="#"
                                @click.prevent="goToSection('/info', 'articles')"
                            )   {{ $t("footer.navLinks.articles") }}
                        li.navigation-item
                            a.navigation-link(
                                href="#"
                                @click.prevent="goToPage('/specialists')"
                            )   {{ $t("footer.navLinks.specialists") }}
                        li.navigation-item
                            a.navigation-link(
                                href="#"
                                @click.prevent="goToPage('/contacts')"
                            )   {{ $t("footer.navLinks.contacts") }}

                .contacts
                    .contacts-info
                        p.contacts-call +7 812 606-76-69
                        span.contacts-text {{ $t("footer.addres") }}
                        span.contacts-text info@liveclinic.ru

                    .social
                        a.social-link(href="https://wa.me/79276560393")
                            v-icon.social-icon.icon-whatsapp(icon="whatsapp")
                        a.social-link(href="tg://resolve?domain=prohorov_i")
                            v-icon.social-icon.icon-telegram(icon="telegram")
                        a.social-link(href="malito:info@liveclinic.ru")
                            v-icon.social-icon.icon-email(icon="email")

            .footer-bottom
                .copy
                    span.copy-item {{ $t("footer.copy.item1") }}
                    span.copy-item {{ $t("footer.copy.item2") }}
                .documents
                    a.documents-link(href="#")
                        v-icon.documents-icon(icon="arrow")
                        span.documents-title {{ $t("footer.documents.doc1") }}
                    a.documents-link(href="#")
                        v-icon.documents-icon(icon="arrow")
                        span.documents-title {{ $t("footer.documents.doc2") }}
</template>

<script>
import { mapMutations } from 'vuex'
import VIcon from '@/components/common/VIcon'

export default {
    name: 'AppFooter',

    components: {
        VIcon
    },

    methods: {
        ...mapMutations(['onScroll']),

        goToPage (path) {
            if (this.$route.path === path) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            } else {
                this.$router.push(path)
            }
        },

        goToSection (path, section) {
            if (this.$route.path === path) {
                document.querySelector(`.${section}`).scrollIntoView({
                behavior: 'smooth'
                })
            } else {
                this.onScroll()
                this.$router.push(path)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.footer
  background-color: $color-whitesmoke

.footer-top
  display: flex
  align-items: flex-start
  justify-content: space-between
  flex-wrap: wrap
  padding: 64px 0
  border-bottom: 1px solid rgba($color-lightgray, 0.15)

.footer-bottom
  display: flex
  justify-content: space-between
  padding: 24px 0

.logo
  width: 140px
  height: 64px
  margin-right: 20px
  cursor: pointer

.logo-image
  width: 100%
  height: 100%

.navigation-list
  display: grid
  grid-template-columns: 1fr 1fr
  column-gap: 52px
  row-gap: 20px

.navigation-link
  display: inline-block
  padding: 8px 0
  font-size: 20px
  line-height: 140%
  color: $color-lightgray
  transition: all 0.3s ease
  cursor: pointer

  &.active
    color: $color-dark

  @media (any-hover: hover)
    &:hover
      color: $color-darkgray

.contacts
  display: flex
  flex-direction: column

.contacts-info
  display: flex
  flex-direction: column
  margin-bottom: 16px

.contacts-call
  margin-bottom: 20px
  font-weight: 700
  font-size: 32px
  line-height: 140%
  color: $color-dark

.contacts-text
  line-height: 150%
  color: $color-dark

  &:not(:last-child)
    margin-bottom: 8px

.social-link:not(:last-child)
  margin-right: 8px

.social-icon
  fill: rgba($color-darkgray, 0.3)
  transition: all 0.3s ease

  @media (any-hover: hover)
    &:hover
      &.icon-whatsapp
        fill: $color-green

      &.icon-telegram
        fill: $color-blue

      &.icon-email
        fill: $color-cyan

.copy
  display: flex
  align-items: flex-start
  flex-direction: column
  margin-right: 10px

.copy-item
  font-size: 14px
  line-height: 115%
  color: $color-lightgray

  &:not(:last-child)
    margin-bottom: 16px

.documents
  flex: 0 1 265px
  display: flex
  align-items: flex-start
  flex-direction: column

.documents-link
  display: flex
  align-items: center

  &:not(:last-child)
    margin-bottom: 16px

  @media (any-hover: hover)
    &:hover
      .documents-title
        color: $color-darkgray
      .documents-icon
        fill: $color-darkgray

.documents-icon
  width: 16px
  height: 16px
  margin-right: 8px
  fill: $color-lightgray
  transition: all 0.3s ease

.documents-title
  font-size: 14px
  line-height: 115%
  color: $color-lightgray
  transition: all 0.3s ease

@media (max-width: 992px)
  .footer-top
    flex-direction: column
    align-items: center
    justify-content: center
    padding: 32px 0
    text-align: center

  .footer-bottom
    flex-direction: column
    align-items: center
    text-align: center

  .navigation
    display: none

  .logo
    width: 140px
    height: 64px
    margin-right: 0

  .copy
    align-items: center
    margin-right: 0
    margin-bottom: 16px

  .documents
    align-items: center
</style>