<template>
    <div class="game-detile">
        <div class="game-detile-top">
            <div class="fanhui" @click="$router.go(-1)">
                <i class="iconfont icon-direction-left"></i>
            </div>
            <img src="@/assets/images/game/gamebigimg.png" />
        </div>

        <div class="game-name">
            <img class="game-icon" src="@/assets/images/game/icon7.png" alt="" />
            <div class="game-name-detile">
                <p class="tank-hero-name-p">Tank Hero</p>
                <div class="tank-hero-name-tag">
                    <span class="game-tag">ARPG</span>
                    <div>
                        <div class="game-platform">
                            <i class="iconfont icon-anzhuo"></i>
                        </div>
                        <div class="game-platform">
                            <i class="iconfont icon-pingguo"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="game-download">
            <i class="iconfont icon-anzhuo"></i>
            <span>Download</span>
        </div>

        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="item in 8" :key="item">
                <img src="@/assets/images/game/small.png" />
            </swiper-slide>
        </swiper>

        <div class="game-detile-box">
            <div class="game-description">
                <div class="game-description-name">Game Description:</div>
                <p class="game-description-detile">
                    Contractors is a team-based competitive multiplayer shooter game for virtual reality devices.
                    Experience the next level virtual warfare with hardcore controls, lethal weapons, customizable
                    firefights.
                </p>
                <p class="game-description-company">Game Company: <span> EA Sports </span></p>
            </div>
            <MobileGames gameTitle="NFT Games" />
        </div>
    </div>
</template>
<script>
import MobileGames from '@/components/mobile/mobile-games.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'game-detile',
    data() {
        return {
            swiperOption: {
                direction: 'horizontal',
                loop: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 20,
                observer: true,
                observeParents: true,
                // slidesPerView: 'auto',
                // spaceBetween: 10,
                // freeMode: true,
            },
        }
    },
    components: { MobileGames, Swiper, SwiperSlide },
}
</script>
<style lang="less" scoped>
.game-detile {
    background-color: #171717;
    .game-detile-top {
        img {
            height: 422px;
            display: block;
        }
        .fanhui {
            width: 64px;
            height: 64px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 50%;
            position: absolute;
            top: 32px;
            left: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            i {
                color: #fcfbfb;
                font-size: 40px;
            }
        }
    }
    .game-name {
        display: flex;
        width: 750px;
        height: 150px;
        background: rgba(31, 31, 31, 0.96);
        display: flex;
        align-items: center;
        padding: 0 35px;
        box-sizing: border-box;
        .game-icon {
            width: 110px;
            height: 110px;
            border-radius: 20px;
        }
        .game-name-detile {
            display: flex;
            flex-direction: column;
            margin-left: 42px;
            flex: 1;
            .tank-hero-name-p {
                font-size: 34px;
                font-weight: bold;
                color: #fbf9f9;
                margin-bottom: 6px;
            }
            .tank-hero-name-tag {
                display: flex;
                align-items: center;
                justify-content: space-between;
                div {
                    display: flex;
                }
            }
            .game-tag {
                background: #2e2e2e;
                border-radius: 16px;
                font-size: 24px;
                font-weight: 400;
                color: #999999;
                padding: 0 14px;
            }
            .game-platform {
                margin-left: auto;
                width: 50px;
                height: 50px;
                background: #2e2e2e;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 36px;
                color: #cbcccd;
                margin-left: 32px;
            }
        }
    }
    .game-download {
        width: 600px;
        height: 80px;
        background: #448ae8;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top: 47px;
        span {
            color: #fff;
            font-size: 34px;
        }
        i {
            color: #fff;
            font-size: 42px;
            margin-right: 40px;
        }
    }
    .swiper {
        margin-top: 59px;
        .swiper-slide {
            width: 580px;
            height: 326px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
    }
    .game-detile-box {
        margin-top: 20px;
        .game-description {
            .game-description-name {
                font-size: 34px;
                font-weight: bold;
                color: #fefefe;
            }
            .game-description-detile {
                font-size: 26px;
                font-weight: 400;
                color: #999999;
                margin-top: 27px;
                line-height: 42px;
            }
            .game-description-company {
                font-size: 24px;
                font-weight: 400;
                color: #999999;
                margin-top: 48px;
                span {
                    color: #448ae8;
                }
            }
        }
        padding: 35px;
        box-sizing: border-box;
    }
}
</style>
