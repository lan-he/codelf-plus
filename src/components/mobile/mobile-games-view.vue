<template>
    <div class="mobile-games-view">
        <div class="games-top">
            <div class="games-title">{{ gameTitle }}</div>
            <div class="more">more</div>
        </div>
        <div class="games-view-box">
            <div class="games-view-box-item">
                <img src="@/assets/images/game/icon4.png" alt="" />
                <span class="games-titles">Tank Hero </span>
                <span class="games-detiles">property</span>
                <div class="view-button">View</div>
            </div>
            <div class="games-view-box-item">
                <img src="@/assets/images/game/icon4.png" alt="" />
                <span class="games-titles">Tank Hero </span>
                <span class="games-detiles">property</span>
                <div class="view-button">View</div>
            </div>
            <div class="games-view-box-item">
                <img src="@/assets/images/game/icon4.png" alt="" />
                <span class="games-titles">Tank Hero </span>
                <span class="games-detiles">property</span>
                <div class="view-button">View</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'mobile-games-view',
    data() {
        return {}
    },
    props: {
        gameTitle: {
            type: String,
            default: 'Games',
        },
    },
}
</script>
<style lang="less" scoped>
.mobile-games-view {
    margin-top: 50px;
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
    .games-view-box {
        display: flex;
        justify-content: space-between;
        .games-view-box-item {
            width: 214px;
            height: 300px;
            background: #323232;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 43px;
            img {
                width: 110px;
                height: 110px;
                border-radius: 20px;
            }
            .games-titles {
                color: #fbf9f9;
                font-size: 24px;
                margin-top: 21px;
            }
            .games-detiles {
                color: #999999;
                font-size: 20px;
            }
            .view-button {
                width: 100px;
                height: 40px;
                background: #268aef;
                border-radius: 20px;
                text-align: center;
                line-height: 40px;
                font-size: 20px;
                font-weight: 400;
                color: #f9fbfc;
                margin-top: 22px;
            }
        }
    }
}
</style>
