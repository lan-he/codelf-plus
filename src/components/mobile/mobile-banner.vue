<template>
    <div class="banner">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="item in 5" :key="item">
                <img src="@/assets/images/home/mobile-swiper.png" @click="$router.push('/games-detail-m')" />
                <div class="download">Download</div>
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
                    delay: 3000,
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
            .download {
                width: 168px;
                height: 54px;
                background: #268aef;
                border-radius: 27px;
                font-size: 24px;
                font-weight: 400;
                color: #fcf9f9;
                text-align: center;
                line-height: 54px;
                position: absolute;
                bottom: 19px;
                right: 34px;
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
