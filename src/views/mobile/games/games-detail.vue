<template>
    <div class="game-detile">
        <img class="game-detile-top" src="@/assets/images/game/gamebigimg.png" />
        <MobileGames gameTitle="NFT Games" />
    </div>
</template>
<script>
import MobileGames from '@/components/mobile/mobile-games.vue'
export default {
    name: 'game-detile',
    data() {
        return {}
    },
    components: { MobileGames },
}
</script>
<style lang="less" scoped>
.game-detile {
    background-color: #171717;
    .game-detile-top {
        height: 422px;
    }
}
</style>
