<template>
    <div class="phone-header">
        <i class="iconfont icon-liebiao2"></i>
        <span>mate</span>
        <div class="userinfo">
            <i class="iconfont icon-jurassic_user"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'phone-header',
    data() {
        return {}
    },
}
</script>

<style lang="less" scoped>
.phone-header {
    width: 750px;
    height: 80px;
    background-color: #111111;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    i {
        font-size: 40px;
        color: #fff;
    }
    span {
        font-size: 38px;
        color: #fff;
    }
    .userinfo {
        width: 50px;
        height: 50px;
        background: #323232;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
            font-size: 30px;
        }
    }
}
</style>
