<template>
    <div class="phone-header">
        <i class="iconfont icon-liebiao2" @click="headerMenu = true"></i>
        <img class="top-logo" src="@/assets/images/login/mobile-top-logo.png" />
        <div class="userinfo" @click="$router.push('/login-m')">
            <i class="iconfont icon-jurassic_user"></i>
        </div>
        <div class="phone-header-menu" v-if="headerMenu">
            <i class="iconfont icon-close close"></i>
            <div class="icon-item" v-for="(item, index) in navlist" :key="index" @click="changenavlistcurrent(index)">
                <i class="iconfont" :class="item.icon"></i>
                <span>{{ item.showName }}</span>
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
            navlist: [
                {
                    showName: 'Home',
                    path: 'home-m',
                    icon: 'icon-zhuye2',
                },
                {
                    showName: 'Games',
                    path: 'games-m',
                    icon: 'icon-game',
                },
                {
                    showName: 'MarkeetPlace',
                    path: 'markeet-place-m',
                    icon: 'icon-w_shangdian',
                },
                {
                    showName: 'Offerwall',
                    path: 'offerwall-m',
                    icon: 'icon-huangguan',
                },
                {
                    showName: 'News',
                    path: 'news-m',
                    icon: 'icon-xinwen',
                },
                {
                    showName: 'About',
                    path: 'about-m',
                    icon: 'icon-xingqiu',
                },
            ],
        }
    },
    methods: {
        changenavlistcurrent(index) {
            this.headerMenu = false
            this.$router.push(`/${this.navlist[index].path}`)
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
    .top-logo {
        width: 190px;
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
            color: #888888;
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
                margin: 0 40px;
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
