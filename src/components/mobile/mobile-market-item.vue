<template>
    <div class="market-item">
        <div v-if="tag" class="market-item-tag hot">Hot</div>
        <div class="market-item-top">
            <img src="@/assets/images/home/mobile-zhuangbei.png" />
        </div>
        <div class="market-item-name">
            <p>Prop name</p>
            <p><i class="yello-spot"></i> 10,086</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'mobile-market-item',
    data() {
        return {}
    },
    props: {
        tag: {
            type: Boolean,
            default: true,
        },
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
    position: relative;
    .market-item-tag {
        position: absolute;
        top: 0;
        right: 0;
        width: 62px;
        height: 24px;
        border-radius: 0 10px 0 10px;
        display: flex;
        color: #fff;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hot {
        background-color: #ec4a18;
    }
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
            display: flex;
            align-items: center;
        }
        .yello-spot {
            display: block;
            width: 12px;
            height: 12px;
            background: #e7ad32;
            border-radius: 50%;
            margin-right: 10px;
        }
    }
}
</style>
