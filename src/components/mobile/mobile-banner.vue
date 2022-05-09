<template>
    <div class="banner">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
                <img src="@/assets/images/home/mobile-swiper.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/home/mobile-swiper.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/home/mobile-swiper.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/home/mobile-swiper.png" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'banner',
    components: { Swiper, SwiperSlide },
    data() {
        return {
            swiperOption: {
                autoplay: {
                    delay: 5000,
                },
                spaceBetween: 10,
                pagination: {
                    el: '.swiper-pagination',
                },
            },
        }
    },
}
</script>
<style lang="less" scoped>
.banner {
    margin-top: 30px;
    .swiper {
        overflow-x: hidden;
        overflow-y: visible;
        height: 500px;
        position: relative;
        .swiper-slide {
            width: 690px;
            height: 450px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullets {
            bottom: 0;
        }
        /deep/ .swiper-pagination-bullet {
            width: 14px;
            height: 14px;
            background-color: #3a3a3a;
        }
        /deep/ .swiper-pagination-bullet-active {
            background-color: #34e0da;
        }
    }
}
</style>
