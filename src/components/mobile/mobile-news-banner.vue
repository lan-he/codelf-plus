<template>
    <div class="banner">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="item in 3" :key="item">
                <img src="@/assets/images/home/mobile-swiper.png" />
                <div class="long-news-name">This is a long news name</div>
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
                // autoplay: {
                //     delay: 3000,
                // },
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
        height: 510px;
        position: relative;
        .swiper-slide {
            width: 690px;
            height: 450px;
            img {
                width: 100%;
                height: 100%;
            }
            .long-news-name {
                font-size: 34px;
                font-weight: 400;
                color: #fbf9f9;
                padding-left: 20px;
            }
        }
        .swiper-pagination-bullets {
            bottom: 6px;
            right: 20px;
            left: auto;
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
