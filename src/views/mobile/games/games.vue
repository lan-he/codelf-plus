<template>
    <div class="mobile-game">
        <MobileHeader />
        <div class="mobile-game-centent">
            <MobileBanner />
            <MobileGamesView gameTitle="IAA Games" />
            <MobileGamesView gameTitle="COMP Games" />
            <MobileGames gameTitle="NFT Games" />
        </div>
    </div>
</template>
<script>
import MobileHeader from '@/components/mobile/mobile-header.vue'
import MobileBanner from '@/components/mobile/mobile-banner.vue'
import MobileGames from '@/components/mobile/mobile-games.vue'
import MobileGamesView from '@/components/mobile/mobile-games-view.vue'
export default {
    name: 'mobile-game',
    data() {
        return {}
    },
    components: { MobileHeader, MobileBanner, MobileGames, MobileGamesView },
}
</script>
<style lang="less" scoped>
.mobile-game {
    background-color: #171717;
    .mobile-game-centent {
        box-sizing: border-box;
        padding: 0 30px;
        padding-bottom: 100px;
    }
}
</style>
