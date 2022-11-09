<template lang="pug">
    .error
        img(
            src="~/assets/images/404.jpg"
            class="error-image"
        )

        v-button.button-error(
            color="primary"
            @click="$router.push('/')"
        ) {{ $t("buttonMain") }}
</template>

<script>
import VButton from '~/components/common/VButton'

export default {
    components: {
        VButton
    },

    layout: 'empty'
}
</script>

<style lang="sass" scoped>
.error
    max-width: 600px

.error-image
    width: 100%

.button-error
    margin: 0 auto
</style>