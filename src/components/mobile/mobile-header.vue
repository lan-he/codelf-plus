<template>
    <div class="phone-header">
        <i class="iconfont icon-liebiao2" @click="headerMenu = true"></i>
        <span>mate</span>
        <div class="userinfo">
            <i class="iconfont icon-jurassic_user"></i>
        </div>
        <div class="phone-header-menu" v-if="headerMenu">
            <i class="iconfont icon-close close"></i>
            <div
                class="icon-item"
                v-for="(item, index) in navlistShow"
                :key="index"
                @click="changenavlistcurrent(index)"
            >
                <i class="iconfont icon-game"></i>
                <span>{{ item }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'phone-header',
    data() {
        return {
            headerMenu: false,
            navlistShow: ['Home', 'Games', 'MarkeetPlace', 'News', 'Offerwall', 'About'],
            navlist: ['home-m', 'games-m', 'markeet-place-m', 'news-m', 'offerwall-m', 'about-m'],
        }
    },
    methods: {
        changenavlistcurrent(index) {
            this.headerMenu = false
            this.$router.push(`/${this.navlist[index]}`)
        },
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
    .phone-header-menu {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 11;
        padding: 80px 50px;
        box-sizing: border-box;
        .close {
            position: absolute;
            top: 20px;
            left: 28px;
        }
        .icon-item {
            display: flex;
            align-items: center;
            border-top: 1px solid rgb(97, 97, 97);
            height: 100px;
            i {
                font-size: 42px;
                margin: 0 20px;
                color: rgb(184, 184, 184);
            }
            span {
                font-size: 34px;
                color: #fff;
            }
        }
    }
}
</style>
