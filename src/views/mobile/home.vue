<template>
    <div class="home">
        <MobileHeader />
        <div class="home-box">
            <MobileBanner />
            <div class="games-show">
                <div class="games-show-item">
                    <img src="@/assets/images/home/game01.png" alt="" />
                    <div class="games-show-item-title">Matchstick Men</div>
                </div>
                <div class="games-show-item">
                    <img src="@/assets/images/home/game01.png" alt="" />
                    <div class="games-show-item-title">Matchstick Men</div>
                </div>
            </div>
            <MobileRankingList />
            <MobileGames />
            <div class="market">
                <div class="games-top">
                    <div class="games-title">Market</div>
                    <div class="more">more</div>
                </div>
                <div class="market-box">
                    <MobileMarketItem v-for="item in 6" :key="item" />
                </div>
            </div>
            <div class="news">
                <div class="games-top">
                    <div class="games-title">News</div>
                    <div class="more">more</div>
                </div>
                <div class="new-list">
                    <div class="new-item">
                        <img src="@/assets/images/home/game01.png" alt="" />
                        <span class="news-name">This is news name</span>
                    </div>
                    <div class="new-item">
                        <img src="@/assets/images/home/game01.png" alt="" />
                        <span class="news-name">This is news name</span>
                    </div>
                </div>
            </div>
        </div>
        <footer>© 2022 Metabridge. All rights reserved</footer>
    </div>
</template>

<script>
import MobileHeader from '@/components/mobile/mobile-header.vue'
import MobileBanner from '@/components/mobile/mobile-banner.vue'
import MobileGames from '@/components/mobile/mobile-games.vue'
import MobileMarketItem from '@/components/mobile/mobile-market-item.vue'
import MobileRankingList from '@/components/mobile/mobile-ranking-list.vue'
export default {
    name: 'home',
    data() {
        return {}
    },
    components: { MobileHeader, MobileBanner, MobileGames, MobileMarketItem, MobileRankingList },
    mounted() {},
}
</script>

<style lang="less" scoped>
.home {
    .home-box {
        width: 750px;
        background-color: #171717;
        box-sizing: border-box;
        padding: 0 30px;
        overflow: hidden;
        .swiper {
            margin: 27px 0;
            img {
                width: 690px;
                height: 450px;
                display: block;
            }
        }
        .games-show {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            .games-show-item {
                width: 334px;
                height: 218px;
                position: relative;
                border-radius: 12px;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
                .games-show-item-title {
                    position: absolute;
                    width: 100%;
                    height: 95px;
                    font-size: 24px;
                    font-weight: 400;
                    color: #e8e8e8;
                    bottom: 0;
                    background-image: linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0) 0%,
                        rgba(0, 0, 0, 0.3) 10%,
                        rgba(0, 0, 0, 0.7) 40%,
                        rgba(0, 0, 0, 0.8) 60%,
                        rgba(0, 0, 0, 1) 100%
                    );
                    padding: 32px 0 0 19px;
                    box-sizing: border-box;
                }
            }
        }
        .market {
            margin-top: 50px;
            .market-box {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
        }
        .news {
            margin-top: 50px;
            margin-bottom: 111px;
            .new-list {
                display: flex;
                justify-content: space-between;
                margin-top: 34px;
                .new-item {
                    display: flex;
                    flex-direction: column;
                    img {
                        width: 334px;
                        height: 188px;
                        border-radius: 10px;
                    }
                    .news-name {
                        font-size: 24px;
                        font-weight: 400;
                        color: #fbf9f9;
                        margin-top: 25px;
                    }
                }
            }
        }
    }
    footer {
        width: 750px;
        height: 292px;
        background: #111111;
        padding-top: 70px;
        text-align: center;
        font-size: 24px;
        font-weight: 400;
        color: #ffffff;
    }
}
.games-top {
    display: flex;
    align-items: center;
    .games-title {
        font-size: 34px;
        font-weight: bold;
        color: #fcfbfb;
    }
    .more {
        margin-left: auto;
        width: 80px;
        height: 32px;
        background: #232323;
        border-radius: 16px;
        font-size: 20px;
        font-weight: 400;
        color: #999999;
        line-height: 32px;
        text-align: center;
    }
}
</style>
