<template lang="pug">
    v-modal(@close="$emit('close')")
        .modal-message(v-if="message")
            h6.message-title {{ message.title }}
            p.message-text {{ message.text }}
</template>

<script>
import VModal from '@/components/common/VModal'

export default {
    name: 'ModalMessage',

    components: {
        VModal
    },

    props: {
        message: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="sass" scoped>
.modal-message
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
</style>