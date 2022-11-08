<template lang="pug">
    client-only
        swiper(:options="swiperOption")
            .swiper-slide(
                v-for="article in articles" :key="article.id"
            )
                <card-article :article="article" />
</template>

<script>
import CardArticle from '@/components/pagePaper/CardArticle'

export default {
    name: 'ArticlesSlider',

    components: {
        CardArticle
    },

    props: {
        articles: {
            type: Array,
            default: () => []
        }
    },

    data () {
        return {
            swiperOption: {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 48,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                breakpoints: {
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 48
                    },
                    666: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    }
                }
            }
        }
    }
}
</script>