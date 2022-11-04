export default {
    computed: {
        defineMinutes () {
            if (this.$i18n.locale === 'ru') {
                const m = Math.abs(this.article.time) % 100
                const n1 = m % 10

                if (m > 10 && m < 20) {
                    return 2
                }

                if (n1 > 1 && n1 < 5) {
                    return 1
                }

                if (n1 === 1) {
                    return 0
                }
    
                return 2
            } else {
                if (this.article.time === 1) {
                    return 0
                }
    
                return 1
            }
        }
    }
}