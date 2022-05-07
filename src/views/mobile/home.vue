<template>
    <div class="home">
        <PhoneHeader />
        <div class="home-box">
            <div class="swiper">
                <img src="@/assets/images/home/mobile-swiper.png" alt="" />
            </div>
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
            <div class="ranking-list">
                <div class="ranking-list-top">
                    <div class="ranking-type">Week</div>
                    <div class="ranking-type">Month</div>
                    <div class="ranking-type">Total</div>
                    <div class="more">more</div>
                </div>
                <div class="ranking-list-content">
                    <div class="ranking-list-content-item">
                        <p>1</p>
                        <img class="head-portrait" src="@/assets/images/home/picture01.png" alt="" />
                        <span>Paul Geroge</span>
                        <div class="marny">$1,008,699</div>
                    </div>
                    <div class="ranking-list-content-item">
                        <p>1</p>
                        <img class="head-portrait" src="@/assets/images/home/picture01.png" alt="" />
                        <span>Paul Geroge</span>
                        <div class="marny">$1,008,699</div>
                    </div>
                    <div class="ranking-list-content-item">
                        <p>1</p>
                        <img class="head-portrait" src="@/assets/images/home/picture01.png" alt="" />
                        <span>Paul Geroge</span>
                        <div class="marny">$1,008,699</div>
                    </div>
                    <div class="ranking-list-content-item">
                        <p>1</p>
                        <img class="head-portrait" src="@/assets/images/home/picture01.png" alt="" />
                        <span>Paul Geroge</span>
                        <div class="marny">$1,008,699</div>
                    </div>
                    <div class="ranking-list-content-item">
                        <p>1</p>
                        <img class="head-portrait" src="@/assets/images/home/picture01.png" alt="" />
                        <span>Paul Geroge</span>
                        <div class="marny">$1,008,699</div>
                    </div>
                </div>
            </div>
            <div class="games">
                <div class="games-top">
                    <div class="games-title">Games</div>
                    <div class="more">more</div>
                </div>
                <div class="games-list">
                    <div class="games-list-box">
                        <div class="games-item">
                            <img src="@/assets/images/home/GFY03.png" alt="" />
                        </div>
                        <div class="games-item">
                            <img src="@/assets/images/home/GFY03.png" alt="" />
                        </div>
                        <div class="games-item">
                            <img src="@/assets/images/home/GFY03.png" alt="" />
                        </div>
                        <div class="games-item">
                            <img src="@/assets/images/home/GFY03.png" alt="" />
                        </div>
                        <div class="games-item">
                            <img src="@/assets/images/home/GFY03.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="market">
                <div class="games-top">
                    <div class="games-title">Market</div>
                    <div class="more">more</div>
                </div>
                <div class="market-box">
                    <div class="market-item">
                        <div class="market-item-top">
                            <img src="@/assets/images/home/mobile-zhuangbei.png" alt="" />
                        </div>
                        <div class="market-item-name">
                            <p>Prop name</p>
                            <p>10,086</p>
                        </div>
                    </div>
                    <div class="market-item">
                        <div class="market-item-top">
                            <img src="@/assets/images/home/mobile-zhuangbei.png" alt="" />
                        </div>
                        <div class="market-item-name">
                            <p>Prop name</p>
                            <p>10,086</p>
                        </div>
                    </div>
                    <div class="market-item">
                        <div class="market-item-top">
                            <img src="@/assets/images/home/mobile-zhuangbei.png" alt="" />
                        </div>
                        <div class="market-item-name">
                            <p>Prop name</p>
                            <p>10,086</p>
                        </div>
                    </div>
                    <div class="market-item">
                        <div class="market-item-top">
                            <img src="@/assets/images/home/mobile-zhuangbei.png" alt="" />
                        </div>
                        <div class="market-item-name">
                            <p>Prop name</p>
                            <p>10,086</p>
                        </div>
                    </div>
                    <div class="market-item">
                        <div class="market-item-top">
                            <img src="@/assets/images/home/mobile-zhuangbei.png" alt="" />
                        </div>
                        <div class="market-item-name">
                            <p>Prop name</p>
                            <p>10,086</p>
                        </div>
                    </div>
                    <div class="market-item">
                        <div class="market-item-top">
                            <img src="@/assets/images/home/mobile-zhuangbei.png" alt="" />
                        </div>
                        <div class="market-item-name">
                            <p>Prop name</p>
                            <p>10,086</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="news">
                <div class="games-top">
                    <div class="games-title">Market</div>
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
        <footer></footer>
    </div>
</template>

<script>
import PhoneHeader from '@/components/mobile/mobile-header.vue'
export default {
    name: 'home',
    data() {
        return {}
    },
    components: { PhoneHeader },
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
                        rgba(0, 0, 0, 0.4) 10%,
                        rgba(0, 0, 0, 0.6) 40%,
                        rgba(0, 0, 0, 0.8) 60%,
                        rgba(0, 0, 0, 1) 100%
                    );
                    padding: 32px 0 0 19px;
                    box-sizing: border-box;
                }
            }
        }
        .ranking-list {
            margin-top: 50px;
            .ranking-list-top {
                display: flex;
                .ranking-type {
                    font-size: 28px;
                    font-weight: 400;
                    color: #999999;
                    margin-right: 50px;
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
            .ranking-list-content {
                background: #323232;
                border-radius: 10px;
                padding: 25px 30px;
                box-sizing: border-box;
                margin-top: 31px;
                .ranking-list-content-item {
                    display: flex;
                    align-items: center;
                    font-size: 24px;
                    font-weight: 400;
                    color: #fcfbfb;
                    margin-top: 32px;
                    .head-portrait {
                        width: 70px;
                        height: 70px;
                        margin: 0 19px 0 32px;
                    }
                    .marny {
                        margin-left: auto;
                    }
                }
            }
        }
        .games {
            margin-top: 50px;
            .games-list {
                overflow-x: scroll;
                overflow-y: hidden;
                .games-list-box {
                    display: flex;
                    width: 1500px;
                    height: 320px;
                    margin-top: 34px;

                    .games-item {
                        width: 240px;
                        height: 320px;
                        margin-right: 20px;
                        border-radius: 10px;
                        overflow: hidden;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
        .market {
            margin-top: 50px;
            .market-box {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .market-item {
                    width: 214px;
                    height: 300px;
                    display: flex;
                    flex-direction: column;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-top: 35px;
                    .market-item-top {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 214px;
                        height: 210px;
                        background-color: #414040;
                        img {
                            width: 150px;
                        }
                    }
                    .market-item-name {
                        flex: 1;
                        background-color: #323232;
                        padding: 18px;
                        box-sizing: border-box;
                        p {
                            font-size: 24px;
                            font-weight: 400;
                            color: #e8e8e8;
                        }
                    }
                }
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
