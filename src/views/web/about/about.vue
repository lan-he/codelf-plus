<template>
    <div class="about">
        <Header> </Header>
        <main>
            <div class="banner">
                <img src="@/assets/images/news/banner.png" alt="" />
                <button>WhitePaper</button>
            </div>
            <div class="esay">
                <p class="project">Project Timeline</p>
                <p class="title">
                    We’re a group of people with two goals in mind: For these goals, we welcome everyone to build with
                    us, and together, we can retake our future. As one, We are Une.
                </p>
            </div>
            <div class="timeline">
                <el-timeline :reverse="reverse">
                    <el-timeline-item
                        v-for="(activity, index) in activities"
                        :key="index"
                        :timestamp="activity.timestamp"
                    >
                        {{ activity.content }}
                    </el-timeline-item>
                </el-timeline>
            </div>
            <div class="imgs">
                <p class="title">Partners</p>
                <ul>
                    <li>
                        <img src="@/assets/images/news/合作LOGO01.png" alt="" />
                    </li>
                    <li>
                        <img src="@/assets/images/news/合作LOGO02.png" alt="" />
                    </li>
                    <li>
                        <img src="@/assets/images/news/合作LOGO03.png" alt="" />
                    </li>
                    <li>
                        <img src="@/assets/images/news/合作LOGO04.png" alt="" />
                    </li>
                    <li>
                        <img src="@/assets/images/news/合作LOGO05.png" alt="" />
                    </li>
                    <li>
                        <img src="@/assets/images/news/合作LOGO06.png" alt="" />
                    </li>
                    <li>
                        <img src="@/assets/images/news/合作LOGO07.png" alt="" />
                    </li>
                    <li>
                        <img src="@/assets/images/news/合作LOGO08.png" alt="" />
                    </li>
                    <li>
                        <img src="@/assets/images/news/合作LOGO09.png" alt="" />
                    </li>
                    <li>
                        <img src="@/assets/images/news/合作LOGO10.png" alt="" />
                    </li>
                </ul>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/pc/header.vue'
import Footer from '@/components/pc/footer.vue'
export default {
    name: 'about',
    data() {
        return {
            reverse: false,
            activities: [
                {
                    content: '',
                    timestamp: '',
                },
                {
                    content: 'Game platform and wallet launches using fiat currency for market testing',
                    timestamp: 'April 2021',
                },
                {
                    content: 'Game platform and wallet launches using fiat currencyfor market testing',
                    timestamp: 'September 2021',
                },
                {
                    content: 'Game platform and wallet launches using fiat currency for market testing',
                    timestamp: 'April 2021',
                },
                {
                    content: 'Game platform and wallet launches using fiat currencyfor market testing',
                    timestamp: 'September 2021',
                },
                {
                    content: 'Game platform and wallet launches using fiat currency for market testing',
                    timestamp: 'April 2021',
                },
                {
                    content: 'Game platform and wallet launches using fiat currencyfor market testing',
                    timestamp: 'September 2021',
                },
                {
                    content: '',
                    timestamp: '',
                },
            ],
        }
    },
    components: {
        Header,
        Footer,
    },
}
</script>

<style lang="less" scoped>
.about {
    padding: 90px 0;
    color: #000;
    position: relative;
    top: 0;
    left: 0;
    main {
        background: #171717;
        padding: 20px 0 110px;
        overflow: hidden;
        .banner {
            height: 540px;
            position: relative;
            img {
                height: 100%;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
            }
            button {
                width: 168px;
                height: 58px;
                background-color: rgba(0, 0, 0, 0.5);
                border-radius: 10px;
                border: solid 2px #fbfbfc;
                position: absolute;
                bottom: 110px;
                left: calc(50% - 70px);
                font-size: 18px;
                line-height: 36px;
                letter-spacing: 0px;
                color: #fcf9f9;
            }
        }
        .esay {
            width: 1160px;
            margin: 80px auto;
            .project {
                text-align: center;
                height: 42px;
                font-size: 44px;
                line-height: 32px;
                letter-spacing: 0px;
                color: #fbf9f9;
            }
            .title {
                margin: 10px auto;
                width: 929px;
                height: 51px;
                font-size: 18px;
                line-height: 32px;
                letter-spacing: -0.2px;
                color: #fbf9f9;
                text-align: center;
            }
        }
        .timeline {
            width: 0px;
            height: 500px;
            margin: 50px auto;
            /deep/li {
                .el-timeline-item__content {
                    transform: translateY(0px);
                    width: 400px;
                    height: 35px;
                    font-size: 14px;
                    line-height: 21px;
                    letter-spacing: 0px;
                    color: #999999;
                }
                .el-timeline-item__timestamp {
                    transform: translateY(-85px);
                    width: 200px;
                    height: 21px;
                    font-size: 22px;
                    line-height: 32px;
                    letter-spacing: 0px;
                    color: #fbfbfb;
                }
            }
            /deep/.el-timeline-item__node--normal {
                left: -5px;
                width: 20px;
                height: 20px;
            }
            /deep/li:nth-child(2n-1) .el-timeline-item__wrapper {
                left: -450px;
                .el-timeline-item__timestamp {
                    text-align: right;
                    width: 386px;
                }
            }
            /deep/li:nth-child(2n) .el-timeline-item__wrapper {
                left: 30px;
            }
        }
        .imgs {
            width: 1160px;
            margin: 85px auto;
            background: #171717;
            padding-top: 50px;
            z-index: 9;
            position: relative;
            .title {
                font-size: 36px;
                font-weight: bold;
                line-height: 34px;
                color: #fcf9f9;
            }
            ul {
                display: flex;
                margin-top: 80px;
                height: 300px;
                flex-wrap: wrap;
                justify-content: space-around;
                li {
                    width: 17%;
                    text-align: center;
                }
            }
        }
    }
}
</style>
