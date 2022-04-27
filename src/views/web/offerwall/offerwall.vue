<template>
    <div class="offerwall">
        <Header></Header>
        <main>
            <div class="information">
                <img src="@/assets/images/offerwall/portrait.png" alt="" />
                <div class="name">
                    <p>Hey!</p>
                    <p>Alexander</p>
                </div>
                <ul>
                    <li>
                        <p>Your Coin</p>
                        <p>10,086,032</p>
                    </li>
                    <li>
                        <i></i>
                    </li>
                    <li>
                        <p>Your Assets</p>
                        <p>$3,175,231</p>
                    </li>
                </ul>
            </div>
            <div class="ranking">
                <Leaderboard></Leaderboard>
            </div>
            <div class="task">
                <span>Task</span>
                <p>
                    More
                    <i class="el-icon-right"></i>
                </p>
            </div>
            <ul class="gamelist">
                <li :class="item.part ? 'aaa' : ''" v-for="(item, index) in gamelists" :key="index">
                    <p class="name">{{ item.name }}</p>
                    <img :src="item.imgsec" alt="" />
                    <p class="introduce">{{ item.introduce }}</p>

                    <el-progress
                        :show-text="false"
                        :percentage="item.percentage"
                        :color="customColorMethod"
                    ></el-progress>
                    <button :class="item.percentage > 50 ? 'button1' : 'button'">
                        {{ item.percentage > 50 ? 'Done' : 'Go' }}
                    </button>
                    <p class="part">{{ item.percentage > 50 ? '' : item.part }}</p>
                    <div v-if="item.double" class="double">Double</div>
                </li>
            </ul>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/pc/header.vue'
import Leaderboard from '@/components/pc/leaderboard.vue'
import Footer from '@/components/pc/footer.vue'
export default {
    name: 'offerwall',
    data() {
        return {
            gamelists: [
                {
                    name: 'Task Name',
                    imgsec: require('../../../assets/images/offerwall/game1.png'),
                    percentage: 20,
                    introduce: 'This is a easy task you must done',
                    part: '1D:18H:55M:32S',
                    double: true,
                },
                {
                    name: 'Task Name',
                    imgsec: require('../../../assets/images/offerwall/game2.png'),
                    percentage: 20,
                    introduce: 'This is a easy task you must done',
                    part: '1D:18H:55M:32S',
                    double: true,
                },
                {
                    name: 'Task Name',
                    imgsec: require('../../../assets/images/offerwall/game3.png'),
                    percentage: 60,
                    introduce: 'This is a easy task you must done',
                    //   part: "1D:18H:55M:32S",
                },
                {
                    name: 'Task Name',
                    imgsec: require('../../../assets/images/offerwall/game4.png'),
                    percentage: 20,
                    introduce: 'This is a easy task you must done',
                    part: '1D:18H:55M:32S',
                },
                {
                    name: 'Task Name',
                    imgsec: require('../../../assets/images/offerwall/game5.png'),
                    percentage: 20,
                    introduce: 'This is a easy task you must done',
                    part: '1D:18H:55M:32S',
                },
            ],
        }
    },
    methods: {
        customColorMethod(percentage) {
            if (percentage < 50) {
                return '#55fa97'
            } else {
                return '#fcd70b'
            }
        },
    },
    components: {
        Header,
        Footer,
        Leaderboard,
    },
}
</script>

<style lang="less" scoped>
.offerwall {
    padding: 90px 0;
    color: #000;
    position: relative;
    top: 0;
    left: 0;
    main {
        width: 100%;
        padding-bottom: 250px;
        background: #171717;
        color: #999999;
        .information {
            width: 1160px;
            height: 200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background-color: #59c5d2;
                border: solid 2px #999999;
                margin-right: 50px;
            }
            .name {
                font-size: 36px;
                line-height: 34px;
                letter-spacing: 0px;
                color: #fdfcfc;
                margin-right: 60px;
                p {
                    margin-bottom: 10px;
                }
            }
            ul {
                display: flex;
                line-height: 29px;
                font-size: 20px;
                li {
                    height: 65px;
                    margin: 0 5px;
                    p {
                        margin-bottom: 10px;
                    }
                    p:nth-child(2) {
                        font-size: 30px;
                        color: #f6d229;
                    }
                    i {
                        display: block;
                        height: 50px;
                        width: 1px;
                        background: #323232;
                        margin: 13px 0;
                    }
                }
                li + li {
                    padding-left: 40px;
                    p:nth-child(2) {
                        font-size: 30px;
                        color: #14db97;
                    }
                }
            }
        }
        .ranking {
            width: 1160px;
            margin: 0 auto;
        }
        .task {
            width: 1160px;
            color: #fff;
            font-size: 36px;
            font-weight: 900;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 40px auto;
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
        .gamelist {
            width: 1160px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            li {
                width: 201px;
                height: 301px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                background-color: #323232;
                border-radius: 10px;
                padding-top: 17px;
                position: relative;
                top: 0;
                left: 0;
                img {
                    width: 99px;
                    height: 99px;
                }
                /deep/.el-progress {
                    width: 120px;
                    margin: 0 auto;
                    .el-progress-bar__outer {
                        height: 8px !important;
                    }
                }
                .button {
                    width: 100px;
                    height: 40px;
                    background-color: #268aef;
                    border-radius: 20px;
                    font-size: 18px;
                    color: #fff;
                }
                .button1 {
                    width: 100px;
                    height: 40px;
                    font-size: 18px;
                    background-color: #979899;
                    border-radius: 20px;
                    color: #fff;
                }
                .name {
                    width: 94px;
                    font-size: 18px;
                    line-height: 24px;
                    letter-spacing: 0px;
                    color: #ffffff;
                }
                .introduce {
                    width: 139px;
                    font-size: 16px;
                    line-height: 18px;
                    letter-spacing: 0px;
                    color: #999999;
                    text-align: left;
                }
                .part {
                    height: 20px;
                    font-size: 14px;
                    line-height: 24px;
                    letter-spacing: 0px;
                    color: #999999;
                }
                .double {
                    width: 62px;
                    height: 24px;
                    background-color: #e42212;
                    border-radius: 10px 0px 10px 0px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    line-height: 24px;
                    letter-spacing: 0px;
                    color: #ffffff;
                    text-align: center;
                }
            }
        }
    }
}
</style>
