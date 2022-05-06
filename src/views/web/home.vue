<template>
    <div class="home">
        <Header></Header>
        <div class="banner">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item, index) in bannerlist" :key="index">
                    <img class="bannerimg" :src="item" alt="" />
                    <div v-if="index == 0" class="btn">
                        <button>More</button>
                        <button>Download</button>
                    </div>
                </el-carousel-item>
            </el-carousel>
            <!-- <el-carousel trigger="click" height="540px">
                    <el-carousel-item v-for="(item, index) in bannerlist" :key="index">
                    <img class="bannerimg" :src="item" alt="" />
                    <div v-if="index == 0" class="btn">
                        <button>More</button>
                        <button>Download</button>
                    </div>
                </el-carousel-item>
            </el-carousel> -->
        </div>
        <main>
            <div class="content">
                <ul class="gamelist">
                    <li v-for="(item, index) in gamelist" :key="index">
                        <div class="img">
                            <img :src="item.img" alt="" />
                        </div>
                        <p class="gamename">{{ item.name }}</p>
                        <p class="gameintroduce">{{ item.introduce }}</p>
                    </li>
                </ul>
                <div class="ranking">
                    <Leaderboard></Leaderboard>
                    <div class="gameforyou">
                        <span>Game For You</span>
                        <p>
                            More
                            <i class="el-icon-right"></i>
                        </p>
                    </div>
                    <div class="block">
                        <el-carousel height="370px" :autoplay="false">
                            <el-carousel-item v-for="(item, index) in gamefourlist" :key="index">
                                <ul class="gamefourlist">
                                    <li v-for="(imgsrc, indextwo) in item.imgsrc" :key="indextwo">
                                        <div class="img">
                                            <img :src="imgsrc" alt="" />
                                        </div>
                                        <div class="article">
                                            <p>Tank Hero</p>
                                            <p>
                                                <span>SPORTS GAME</span>
                                                <span> 335 playing</span>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="gameforyou">
                        <span>MarketPlace</span>
                        <p>
                            More
                            <i class="el-icon-right"></i>
                        </p>
                    </div>
                    <ul class="tntlist">
                        <li v-for="(item, index) in tntlist" :key="index">
                            <div class="img">
                                <img :src="item.imgsrc" alt="" />
                            </div>
                            <div class="content">
                                <div class="name">{{ item.name }}</div>
                                <div class="money"><i></i>{{ item.money }}</div>
                                <div class="introduce">{{ item.introduce }}</div>
                            </div>
                        </li>
                    </ul>
                    <div class="gameforyou">
                        <span>News</span>
                        <p>
                            More
                            <i class="el-icon-right"></i>
                        </p>
                    </div>
                    <Newlist></Newlist>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/pc/header.vue'
import Leaderboard from '@/components/pc/leaderboard.vue'
import Footer from '@/components/pc/footer.vue'
import Newlist from '@/components/pc/newslist.vue'
export default {
    name: 'home',
    data() {
        return {
            show: false,
            navlistcurrent: 0,
            navlist: ['Home', 'Games', 'MarkeetPlace', 'News', 'Offerwall', 'About'],
            bannerlist: [
                require('../../assets/images/home/banner.png'),
                require('../../assets/images/home/banner02.png'),
            ],
            gamelist: [
                {
                    img: require('../../assets/images/home/game01.png'),
                    name: 'Game Name',
                    introduce: 'This is a best game',
                },
                {
                    img: require('../../assets/images/home/game02.png'),
                    name: 'Game Name',
                    introduce: 'This is a best game',
                },
                {
                    img: require('../../assets/images/home/game03.png'),
                    name: 'Game Name',
                    introduce: 'This is a best game',
                },
            ],
            tntlist: [
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
                {
                    imgsrc: require('../../assets/images/home/tnt.png'),
                    name: 'Prop name',
                    money: '10,086',
                    introduce: 'This is game name',
                },
            ],
            gamefourlist: [
                {
                    imgsrc: [
                        require('../../assets/images/home/GFY01.png'),
                        require('../../assets/images/home/GFY02.png'),
                        require('../../assets/images/home/GFY03.png'),
                        require('../../assets/images/home/GFY04.png'),
                    ],
                },
                {
                    imgsrc: [
                        require('../../assets/images/home/GFY01.png'),
                        require('../../assets/images/home/GFY02.png'),
                        require('../../assets/images/home/GFY03.png'),
                        require('../../assets/images/home/GFY04.png'),
                    ],
                },
                {
                    imgsrc: [
                        require('../../assets/images/home/GFY01.png'),
                        require('../../assets/images/home/GFY02.png'),
                        require('../../assets/images/home/GFY03.png'),
                        require('../../assets/images/home/GFY04.png'),
                    ],
                },
            ],
            options: [
                {
                    value: '选项1',
                    label: 'USA',
                },
                {
                    value: '选项2',
                    label: '中文',
                },
            ],
            value: '选项1',
        }
    },
    methods: {
        getSonFn(data) {
            this.show = data
        },
    },
    components: {
        Leaderboard,
        Header,
        Footer,
        Newlist,
    },
}
</script>

<style lang="less" scoped>
.home {
    position: relative;
    top: 0;
    left: 0;
    padding: 90px 0 0;
    width: 100%;
    .banner {
        height: 405px;
        background-color: #03152a;
        /deep/ .el-carousel {
            width: 100%;
            height: 100%;
            position: relative;
        }
        /deep/ .el-carousel__container {
            width: 100%;
            height: 100%;
            position: relative;
        }
        /deep/ .el-carousel__arrow--left {
            left: 253px;
        }
        /deep/ .el-carousel__arrow--right {
            right: 253px;
        }
        /deep/ .el-carousel__arrow {
            width: 50px;
            height: 50px;
            background: rgba(1, 1, 1, 0.6);
            i {
                font-size: 28px;
                color: #fff;
                font-weight: 600;
            }
        }
        // 指示器
        /deep/ .el-carousel__indicators--outside {
            position: absolute;
            .el-carousel__button {
                width: 8px;
                height: 8px;
                border-radius: 50%;
            }
            .is-active {
                .el-carousel__button {
                    background-color: #34e0da;
                }
            }
        }
        img {
            height: 100%;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    main {
        width: 100%;
        padding-bottom: 250px;
        background-color: #171717;
        .content {
            width: 1000px;
            height: 100%;
            overflow: hidden;
            margin: 0 auto;
            .gamelist {
                margin: 30px 0;
                display: flex;
                justify-content: space-between;
                li {
                    width: 31%;
                    height: 280px;
                    .img {
                        width: 100%;
                        border-radius: 10px;
                        overflow: hidden;
                        img {
                            width: 100%;
                            height: 100%;
                            transition: 0.5s;
                            &:hover {
                                transform: scale(1.1);
                            }
                        }
                    }
                    .gamename {
                        color: #fff;
                        margin: 4px 0;
                        font-size: 20px;
                        transition: 0.3s;
                        &:hover {
                            color: #268aef;
                        }
                    }
                    .gameintroduce {
                        color: #808082;
                        font-size: 16px;
                    }
                }
            }
            .ranking {
                .gameforyou {
                    color: #fff;
                    font-size: 36px;
                    font-weight: 900;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 30px auto;
                    p {
                        width: 100px;
                        height: 30px;
                        background: #292828;
                        border-radius: 30px;
                        text-align: center;
                        line-height: 30px;
                        color: #bdbcbc;
                        font-size: 16px;
                        font-weight: 400;
                        cursor: pointer;
                        transition: 0.3s;
                        &:hover {
                            color: #268aef;
                        }
                    }
                }
                .gamefourlist {
                    display: flex;
                    justify-content: space-between;
                    li {
                        width: 23%;
                        height: 320px;
                        overflow: hidden;
                        .article {
                            width: 100%;
                            background: rgba(0, 0, 0, 0.7);
                            transition: 0.3s;
                            padding: 5px 0;
                            p {
                                color: #fff;
                                padding: 5px 12px;
                                display: flex;
                                justify-content: space-between;
                                font-size: 16px;
                                span {
                                    color: #979797;
                                    font-size: 14px;
                                }
                            }
                        }
                        &:hover .article {
                            transform: translateY(-70px);
                        }
                    }
                }
                .block {
                    .img {
                        border-radius: 10px;
                        width: 100%;
                        height: 320px;
                        overflow: hidden;
                        img {
                            transition: 0.5s;
                            &:hover {
                                transform: scale(1.1);
                            }
                        }
                    }
                    /deep/.el-carousel__indicator--horizontal {
                        .el-carousel__button {
                            width: 100px;
                            height: 6px;
                            border-radius: 10px;
                            background: #292929;
                            margin: 0 -6px;
                            opacity: 1;
                        }
                    }
                    /deep/li.is-active {
                        .el-carousel__button {
                            background: #268aef;
                            position: relative;

                            z-index: 2;
                        }
                    }
                }
                .tntlist {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    li {
                        width: 19%;
                        height: 300px;
                        background: #323232;
                        border-radius: 10px;
                        margin: 10px 0;
                        box-sizing: border-box;
                        border: 2px solid #171717;
                        transition: 0.5s;
                        &:hover {
                            border-color: #268aef;
                        }
                        .img {
                            width: 100%;
                            border-radius: 10px 10px 0 0;
                            background-color: #414040;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 210px;
                            img {
                                flex: 0 0 auto;
                            }
                        }
                        .content {
                            width: 100%;
                            height: 78px;
                            box-sizing: border-box;
                            padding: 12px 16px;
                            color: #9b9b9b;
                            font-size: 14px;
                            .money {
                                i {
                                    display: inline-block;
                                    width: 10px;
                                    height: 10px;
                                    background-color: #e7ad32;
                                    border-radius: 50%;
                                    margin-right: 5px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
