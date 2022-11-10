export default {
    data () {
        return {
            isDesktop: true
        }
    },
  
    mounted () {
        this.windowUpdateWidth()
        window.addEventListener('resize', this.windowUpdateWidth)
    },

    beforeDestroy () {
        window.removeEventListener('resize', this.windowUpdateWidth)
    },
  
    methods: {
        windowUpdateWidth () {
            const width = window.innerWidth
    
            if (width < 576) {
                this.isDesktop = false
            } else {
                this.isDesktop = true
            }
        }
    }
}