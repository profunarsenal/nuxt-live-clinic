<template lang="pug">
    v-modal(@close="$emit('close')")
        .modal-entry(v-if="isShowForm")
            h4.title {{ $t("modalEntry.title") }}

            p.subtitle(v-html="$t('modalEntry.subtitle')")

            form.form(@submit.prevent="submit")
                v-input(
                    v-model="name"
                    id="name"
                    icon="user"
                    :placeholder="$t('placeholders.name')"
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
                    :placeholder="$t('placeholders.phone')"
                    maxlength="18"
                    @input="validatePhone"
                    @onBlur="validatePhoneNumber"
                    @onAccept="onAcceptInput"
                    @onFocus="addTemplate"
                )

                v-button.form-button(
                    color="primary"
                    type="submit"
                ) {{ $t("buttons.call") }}

                v-button.form-button(
                    color="whatsapp"
                    icon="whatsapp"
                    type="button"
                )   {{ whatsappButton }}

                v-button.form-button(
                    color="telegram"
                    icon="telegram"
                    type="button"
                )   {{ telegramButton }}

            p.text-info {{ $t("modalEntry.text") }}

        .message(v-else)
            h6.message-title {{ message.title }}
            p.message-text {{ message.text }}
</template>

<script>
import { IMaskDirective } from 'vue-imask'
import validation from '@/mixins/validation'
import window from '@/mixins/window'
import VInput from '@/components/common/VInput'
import VIcon from '@/components/common/VIcon'
import VButton from '@/components/common/VButton'
import VModal from '@/components/common/VModal'
import ModalMessage from '@/components/modals/ModalMessage'

export default {
    name: 'ModalEntry',

    components: {
        VInput,
        VIcon,
        VButton,
        VModal,
        ModalMessage
    },

    directives: {
        imask: IMaskDirective
    },

    mixins: [validation, window],

    emits: ['close'],

    data () {
        return {
            isShowForm: true,
            message: {}
        }
    },

    computed: {
        whatsappButton () {
            return this.isDesktop ? this.$t('buttons.whatsapp') : this.$t('buttons.whatsappMobile')
        },

        telegramButton () {
            return this.isDesktop ? this.$t('buttons.telegram') : this.$t('buttons.telegramMobile')
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

                    this.setMessage(this.$t('messages.formSucces'))
                    this.isShowForm = false

                    this.resetForm()
                    this.clearErrors()
                    this.isFormValid = false
                } catch {
                    this.setMessage(this.$t('messages.formError'))
                    this.isShowForm = false
                }
            }
        },

        setMessage (obj) {
            this.message = obj
        }
    }
}
</script>

<style lang="sass" scoped>
.modal-entry
    position: relative
    min-width: 430px
    padding: 56px 20px 20px 20px

.title
    margin-bottom: 10px
    font-weight: 600
    font-size: 32px
    line-height: 100%
    text-align: center

.subtitle
    margin-bottom: 40px
    line-height: 149%
    color: $color-lightgray
    text-align: center

.form
    margin-bottom: 20px

    & > .input-label
        margin-bottom: 16px

.form-button
    width: 100%

    &:not(:last-child)
        margin-bottom: 8px

.text-info
    font-size: 14px
    line-height: 24px
    color: $color-darkgray
    text-align: center

.message
    padding: 30px
    text-align: center

.message-title
    display: block
    margin-bottom: 10px
    font-size: 24px
    font-weight: 600

.message-text
    font-size: 18px
    line-height: 140%

@media (max-width: 1366px)
    .modal-entry
        padding-top: 36px

    .subtitle
        margin-bottom: 20px

    .form
        margin-bottom: 10px

@media (max-width: 576px)
    .modal-entry
        min-width: auto
        margin: 0 auto

    .form-button
        font-size: 16px
</style>