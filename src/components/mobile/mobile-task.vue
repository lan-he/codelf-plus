<template>
    <div class="task">
        <div class="task-top">
            <div class="task-title">Task</div>
            <div class="more">more</div>
        </div>
        <div class="task-box">
            <div class="task-item" v-for="item in 6" :key="item">
                <p class="task-item-title">Prop name</p>
                <img src="@/assets/images/game/icon4.png" />
                <span class="must-done">This is a easy task you must</span>
                <div class="progress-bar">
                    <div class="progress-bar-content"></div>
                </div>
                <div class="button-go">Go</div>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper/css/swiper.css'

export default {
    name: 'task',
    data() {
        return {
            swiperOption: {
                slidesPerView: 'auto',
                loopedSlides: 4,
                freeMode: true,
                dragSize: 30,
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            },
        }
    },
    props: {
        gameTitle: {
            type: String,
            default: 'Games',
        },
    },
    mounted() {},
}
</script>

<style lang="less" scoped>
.task {
    margin-top: 50px;
    .task-top {
        display: flex;
        align-items: center;
        .task-title {
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
    .task-box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .task-item {
            width: 214px;
            height: 340px;
            background: #323232;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 34px;
            padding: 0 20px;
            box-sizing: border-box;
            .task-item-title {
                font-size: 24px;
                font-weight: 400;
                color: #e8e8e8;
            }
            img {
                width: 98px;
                height: 100px;
                margin-top: 10px;
                margin-bottom: 10px;
            }
            .must-done {
                font-size: 20px;
                font-weight: 400;
                color: #999999;
            }
            .progress-bar {
                width: 150px;
                height: 10px;
                background: #232323;
                border-radius: 5px;
                position: relative;
                margin-top: 10px;
                .progress-bar-content {
                    width: 44px;
                    height: 10px;
                    background: #55fa97;
                    border-radius: 5px;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
            }
            .button-go {
                width: 100px;
                height: 40px;
                background: #268aef;
                border-radius: 20px;
                font-size: 20px;
                font-weight: 400;
                color: #f9fbfc;
                text-align: center;
                line-height: 40px;
                margin-top: 20px;
            }
        }
    }
}
</style>
