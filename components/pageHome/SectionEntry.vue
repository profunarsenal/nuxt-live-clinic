<template lang="pug">
    section.entry
        .container
            .entry-wrapper
                .content
                    h2.entry-title(v-html="$t('entryTitle')")
                    p.entry-subtitle(v-html="$t('entrySubtitle')")
                    v-icon.entry-icon(icon="arrow")

                form.form(@submit.prevent="submit")
                    v-input(
                        v-model="name"
                        id="name"
                        icon="user"
                        :placeholder="$t('name')"
                        :error="errors.name"
                        @input="validateName"
                        @onBlur="editName"
                    )

                    v-input(
                        v-model="phone"
                        :mask="mask"
                        icon="phone"
                        id="phone"
                        :error="errors.phone"
                        :placeholder="$t('phone')"
                        maxlength="18"
                        @input="validatePhone"
                        @onBlur="validatePhoneNumber"
                        @onAccept="onAcceptInput"
                        @onFocus="addTemplate"
                    )

                    v-button.form-button(color="primary") {{ $t("buttonEnroll") }}
    
                    modal-message(
                        v-if="isOpenModal"
                        :message="message"
                        @close="closeModal"
                    )
</template>

<script>
import { IMaskDirective } from 'vue-imask'
import valitation from '~/mixins/validation'
import VIcon from '~/components/common/VIcon'
import VButton from '~/components/common/VButton'
import VInput from '~/components/common/VInput'
import ModalMessage from '~/components/modals/ModalMessage'

export default {
    name: 'SectionEntry',

    components: {
        VIcon,
        VButton,
        VInput,
        ModalMessage
    },

    directives: {
        imask: IMaskDirective
    },

    mixins: [valitation],

    data () {
        return {
            isOpenModal: false,
            message: {}
        }
    },

    methods: {
        async submit () {
            await this.checkForm()

            if (this.isFormValid) {
                try {
                    await this.$service.applications.sendApplication({
                        name: this.name,
                        phone: this.phone
                    })

                    this.setMessage({
                        title: this.$t('thanks'),
                        text: this.$t('answerSucces')
                    })
                    this.openModal()

                    this.resetForm()
                    this.clearErrors()
                    this.isFormValid = false
                } catch {
                    this.setMessage({
                        title: this.$t('error'),
                        text: this.$t('answerError')
                    })
                    this.openModal()
                }
            }
        },

        openModal () {
            this.isOpenModal = true
        },

        closeModal () {
            this.isOpenModal = false
        },

        setMessage (obj) {
            this.message = obj
        }
    }
}
</script>

<style lang="sass" scoped>
.entry
    padding: 150px 0

.entry-wrapper
    position: relative
    display: flex
    justify-content: space-between
    padding: 72px 76px
    border-radius: 48px
    background: url("~static/images/frame.svg") no-repeat center / contain

.content
    position: relative
    flex: 0 1 40%
    margin-right: 132px

.entry-title
    @extend .title
    margin-bottom: 60px

.entry-subtitle
    font-size: 18px
    line-height: 155%
    color: rgba($color-darkgray, 0.8)

.entry-icon
    position: absolute
    bottom: 0
    right: 0
    fill: $color-dark

.form
    position: relative
    z-index: 1
    flex: 0 1 60%
    padding-top: 16px

    & > .input-label
        margin-bottom: 20px

@media (max-width: 992px)
    .entry
        padding: 100px 0

    .entry-wrapper
        flex-direction: column
        padding: 40px
        text-align: center
        background: none

    .entry-icon
        display: none

    .content
        flex: 0 1 100%
        margin-right: 0
        margin-bottom: 12px

    .form
        flex: 0 1 100%

    .entry-title
        margin-bottom: 40px

    .form-button
        margin: 0 auto

@media (max-width: 767px)
    .entry
        padding: 72px 0

    .entry-wrapper
        padding: 40px

    .form-button
        width: 100%

@media (max-width: 576px)
    .entry-wrapper
        padding: 0
</style>