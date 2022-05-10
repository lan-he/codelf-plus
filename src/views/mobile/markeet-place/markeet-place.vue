<template>
    <div class="markeet-place">
        <MobileHeader />
        <div class="markeet-place-centent">
            <MobileBanner />
            <div class="search">
                <i class="iconfont icon-sousuo"></i>
                <span>Search</span>
                <i class="iconfont icon-sousuo" style="opacity: 0"></i>
            </div>
            <div class="screen-box">
                <div class="screen-box-item">
                    <span>All Coin</span>
                    <i class="iconfont icon-arrow-down"></i>
                </div>
                <div class="screen-box-item">
                    <span>All Coin</span>
                    <i class="iconfont icon-arrow-down"></i>
                </div>
            </div>
            <div class="mark-box">
                <MobileMarketItem v-for="item in 9" :key="item" />
            </div>
            <MobileGames gameTitle="NFT Games" />
        </div>
    </div>
</template>
<script>
import MobileHeader from '@/components/mobile/mobile-header.vue'
import MobileBanner from '@/components/mobile/mobile-banner.vue'
import MobileGames from '@/components/mobile/mobile-games.vue'
import MobileMarketItem from '@/components/mobile/mobile-market-item.vue'
export default {
    name: 'markeet-place',
    data() {
        return {}
    },
    components: { MobileHeader, MobileBanner, MobileGames, MobileMarketItem },
}
</script>
<style lang="less" scoped>
.markeet-place {
    background-color: #171717;
    .markeet-place-centent {
        box-sizing: border-box;
        padding: 0 30px;
        padding-bottom: 100px;
        .search {
            width: 690px;
            height: 66px;
            background: #515151;
            opacity: 0.9;
            border-radius: 33px;
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 22px;
            box-sizing: border-box;
            .icon-sousuo {
                font-size: 40px;
            }
        }
        .screen-box {
            margin-top: 38px;
            display: flex;
            .screen-box-item {
                width: 180px;
                height: 50px;
                background: #171717;
                border: 1px solid #268aef;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                font-weight: 400;
                color: #268aef;
                margin-right: 28px;
                i {
                    margin-left: 5px;
                }
            }
        }
        .mark-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            border-top: 1px solid #414040;
            margin-top: 50px;
        }
    }
}
</style>
