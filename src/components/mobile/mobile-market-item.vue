<template>
    <div class="market-item">
        <div class="market-item-top">
            <img src="@/assets/images/home/mobile-zhuangbei.png" />
        </div>
        <div class="market-item-name">
            <p>Prop name</p>
            <p>10,086</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'mobile-market-item',
    data() {
        return {}
    },
}
</script>
<style lang="less" scoped>
.market-item {
    width: 214px;
    height: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 35px;
    .market-item-top {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 214px;
        height: 210px;
        background-color: #414040;
        img {
            width: 150px;
        }
    }
    .market-item-name {
        flex: 1;
        background-color: #323232;
        padding: 18px;
        box-sizing: border-box;
        p {
            font-size: 24px;
            font-weight: 400;
            color: #e8e8e8;
        }
    }
}
</style>
