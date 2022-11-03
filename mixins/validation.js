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
            }
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

        submit () {
            if (this.errors.name === '' && this.errors.phone === '') {
                this.name = ''
                this.phone = ''
            }
        }
    }
}