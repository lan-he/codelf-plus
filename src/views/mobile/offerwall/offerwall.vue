<template>
    <div class="mobile-game">
        <MobileHeader />
        <div class="offerwall-top">
            <div class="offerwall-top-content">
                <img class="header" src="@/assets/images/offerwall/portrait.png" />
                <p class="header-title">Hello! <br />Alexander</p>
            </div>
            <div class="offerwall-bottom">
                <div>
                    <span class="your-coin">Your Coin</span>
                    <p class="your-coin-num">10,086,032</p>
                </div>
                <div class="line"></div>
                <div>
                    <span class="your-coin">Your Assets</span>
                    <p class="your-coin-num" style="color: #25e3a2">$3,175,231</p>
                </div>
            </div>
        </div>
        <div class="mobile-game-centent">
            <MobileRankingList :rankingNumber="10" />
            <MobileTask />
        </div>
    </div>
</template>
<script>
import MobileHeader from '@/components/mobile/mobile-header.vue'
import MobileRankingList from '@/components/mobile/mobile-ranking-list.vue'
import MobileTask from '@/components/mobile/mobile-task.vue'
export default {
    name: 'mobile-game',
    data() {
        return {}
    },
    components: { MobileHeader, MobileRankingList, MobileTask },
}
</script>
<style lang="less" scoped>
.mobile-game {
    background-color: #171717;
    .offerwall-top {
        height: 429px;
        background: url('../../../assets/images/offerwall/mobile-offerwall-bg.png');
        background-size: 100% 100%;
        padding: 55px 89px;
        box-sizing: border-box;
        .offerwall-top-content {
            display: flex;
        }
        .header {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }
        .header-title {
            font-size: 48px;
            font-weight: bold;
            color: #fdfcfc;
            margin-left: 43px;
        }
        .mobile-game-centent {
            box-sizing: border-box;
            padding: 0 30px;
            padding-bottom: 100px;
        }
        .offerwall-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 60px;
            .your-coin {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 13px;
                padding: 0 18px;
                font-size: 20px;
                font-weight: 400;
                color: #fcfbfb;
            }
            .your-coin-num {
                font-size: 34px;
                font-weight: bold;
                color: #f6d229;
                margin-top: 20px;
            }
            .line {
                width: 1px;
                height: 60px;
                background: rgba(249, 249, 250, 0.28);
            }
        }
    }
    .mobile-game-centent {
        box-sizing: border-box;
        padding: 0 30px;
        padding-bottom: 100px;
    }
}
</style>
