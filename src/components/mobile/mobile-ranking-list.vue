<template>
    <div class="ranking-list">
        <div class="ranking-list-top">
            <div class="ranking-type" v-for="item in typeaLest" :key="item" @click="typeListClick(item)">
                <span :class="{ active: item === typeActive }">{{ item }}</span>
                <i v-show="item === typeActive"></i>
            </div>
            <div class="more">more</div>
        </div>
        <div class="ranking-list-content">
            <div class="ranking-list-content-item" v-for="item in rankingNumber" :key="item">
                <img class="content-item-img" v-if="item === 1" src="@/assets/images/home/NO1.png" />
                <img class="content-item-img" v-else-if="item === 2" src="@/assets/images/home/NO2.png" />
                <img class="content-item-img" v-else-if="item === 3" src="@/assets/images/home/NO3.png" />
                <p v-else class="content-item-title">{{ item }}</p>
                <img class="head-portrait" src="@/assets/images/home/picture01.png" alt="" />
                <span>Paul Geroge</span>
                <div class="marny">$1,008,699</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ranking-list',
    data() {
        return {
            typeaLest: ['Week', 'Month', 'Total'],
            typeActive: 'Week',
        }
    },
    props: {
        rankingNumber: {
            type: Number,
            default: 5,
        },
    },
    methods: {
        typeListClick(item) {
            this.typeActive = item
        },
    },
}
</script>
<style lang="less" scoped>
.ranking-list {
    margin-top: 50px;
    .ranking-list-top {
        display: flex;
        .ranking-type {
            font-size: 28px;
            font-weight: 400;
            color: #999999;
            margin-right: 50px;
            position: relative;
            span {
                font-size: 30px;
                font-weight: 400;
                color: #999999;
            }
            .active {
                font-size: 30px;
                font-weight: bold;
                color: #fcfbfb;
            }
            i {
                width: 50px;
                height: 6px;
                background: #34e0da;
                border-radius: 3px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: -10px;
            }
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
            .content-item-img {
                width: 53px;
            }
            .content-item-title {
                font-size: 40px;
                font-weight: 600;
                color: #fcfbfb;
                width: 53px;
                text-align: center;
            }
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
</style>
