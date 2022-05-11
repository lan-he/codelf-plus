<template>
    <div class="about">
        <MobileHeader />
        <img class="about-top" src="@/assets/images/game/mobile-about-top.png" />
        <div class="about-centent">
            <p class="project-timeline">Project Timeline</p>
            <p class="project-timeline-ditile">
                We’re a group of people with two goals in mind: For these goals, we welcome everyone to build with us,
                and together, we can retake our future. As one, We are Une.
            </p>
            <div class="time-axis">
                <div class="time-axis-rideo" v-for="item in 5" :key="item">
                    <div v-if="item !== 1">
                        <div class="describe-problem" :class="{ right: item % 2 === 1 }">
                            <p class="september-title">April 2021</p>
                            <p class="september-title-ditle">
                                Game platform and wallet launches using fiat currency for market testing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="partners">Partners</div>
            <div class="iconfont-box">
                <i class="iconfont icon-pingguo" v-for="item in 9" :key="item"></i>
            </div>
        </footer>
    </div>
</template>
<script>
import MobileHeader from '@/components/mobile/mobile-header.vue'
export default {
    name: 'about',
    data() {
        return {}
    },
    components: { MobileHeader },
}
</script>
<style lang="less" scoped>
.about {
    background-color: #171717;
    .about-top {
        height: 422px;
    }
    .about-centent {
        box-sizing: border-box;
        padding: 0 70px;
        padding-bottom: 100px;
        .project-timeline {
            font-size: 34px;
            font-weight: bold;
            color: #fbf9f9;
            text-align: center;
            margin-top: 56px;
        }
        .project-timeline-ditile {
            font-size: 24px;
            font-weight: 400;
            color: #fbf9f9;
            text-align: center;
            margin-top: 28px;
        }
        .time-axis {
            width: 4px;
            margin: auto;
            background-color: #fcfafa;
            position: relative;
            margin-top: 74px;
            padding-bottom: 10px;
            .time-axis-rideo {
                width: 22px;
                height: 22px;
                background: #fcfafa;
                border-radius: 50%;
                margin-bottom: 150px;
                // position: absolute;
                position: relative;
                left: 60%;
                transform: translateX(-50%);
                .describe-problem {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 100px;
                    .september-title {
                        font-size: 34px;
                        font-weight: bold;
                        color: #fbfbfb;
                        margin-bottom: 17px;
                    }
                    .september-title-ditle {
                        width: 237px;
                        height: 131px;
                        font-size: 24px;
                        font-weight: 400;
                        color: #999999;
                        line-height: 36px;
                    }
                }
                .right {
                    left: -300px;
                    text-align: end;
                }
            }
        }
    }
    footer {
        padding: 40px 36px;
        box-sizing: border-box;
        border-top: 1px solid #2e2e2e;
        .partners {
            font-size: 34px;
            font-weight: bold;
            color: #fcf9f9;
        }
        .iconfont-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            i {
                font-size: 80px;
                color: #666666;
                margin: 50px 70px;
            }
        }
    }
}
</style>
