export default {
    data () {
        return {
            name: '',
            phone: '',
            errors: {
                name: null,
                phone: null
            },
            mask: {
                mask: '+{7} (000) 000-00-00',
                lazy: true
            },
            isFormValid: false
        }
    },

    methods: {
        validateName (event) {
            if (!event) {
                this.errors.name = this.$t('validate.name')
            } else {
                this.errors.name = ''
            }
        },

        validatePhone (event) {
            if (!event) {
                this.errors.phone = this.$t('validate.name')
            } else {
                this.errors.phone = ''
            }
        },

        validatePhoneNumber (event) {
            // eslint-disable-next-line
            if (!/^[\d\+][\d\(\)\ -]{16,18}\d$/.test(event)) {
                this.errors.phone = this.$t('validate.phone')
            } else {
                this.errors.phone = ''
            }
        },

        onAcceptInput (event) {
            const maskRef = event.detail
            this.phone = maskRef.value
        },

        addTemplate () {
            if (this.phone === '') {
                this.phone = '+7'
            }
        },

        editName () {
            if (this.name !== '') {
                this.name = this.name[0].toUpperCase() + this.name.substr(1)
            }
        },

        resetForm () {
            this.name = ''
            this.phone = ''
        },

        clearErrors () {
            this.errors.name = null
            this.errors.phone = null
        },

        checkForm () {
            if (this.name === '') {
                this.errors.name = this.$t('validate.name')
            } else {
                this.isFormValid = true
            }

            if (this.phone === '') {
                this.errors.phone = this.$t('validate.name')
                this.isFormValid = false
            } else {
                this.isFormValid = true
            }

            // eslint-disable-next-line
            if (!/^[\d\+][\d\(\)\ -]{16,18}\d$/.test(this.phone)) {
                this.errors.phone = this.$t('validate.phone')
                this.isFormValid = false
            } else {
                this.isFormValid = true
            }
        }
    }
}