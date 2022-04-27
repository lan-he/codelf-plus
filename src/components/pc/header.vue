<template>
    <div class="main-header">
        <nav>
            <div class="logo">
                <img src="@/assets/images/home/LOGO.png" alt="" />
            </div>
            <ul>
                <li
                    v-for="(item, index) in navlistShow"
                    :class="navlistcurrent == index ? 'active' : ''"
                    :key="index"
                    @click="changenavlistcurrent(index)"
                >
                    <span class="tabindex">{{ item }}</span>
                    <div></div>
                </li>
            </ul>
            <div class="login" @click="loginBox = true">
                <img src="@/assets/images/home/login.png" alt="" />
            </div>
        </nav>
        <LoginPop v-if="loginBox" @closeLogin="loginBox = fales" />
    </div>
</template>

<script>
import LoginPop from '@/components/pc/login-pop.vue'
export default {
    name: 'main-header',
    data() {
        return {
            navlistcurrent: 0,
            navlistShow: ['Home', 'Games', 'MarkeetPlace', 'News', 'Offerwall', 'About'],
            navlist: ['home', 'games', 'markeet-place', 'news', 'offerwall', 'about'],
            loginBox: false,
        }
    },
    components: {
        LoginPop,
    },
    methods: {
        changenavlistcurrent(index) {
            this.$store.state.navlistcurrent = index
            this.$router.push(`/${this.navlist[index]}`)
        },
    },
    mounted() {
        this.navlistcurrent = this.navlist.indexOf(this.$route.path.split('/')[1])
        // this.$route.path.split("/");
    },
}
</script>

<style lang="less" scoped>
.main-header {
    width: 100%;
    background: #111111;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    nav {
        height: 90px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
            width: 30%;
        }
        ul {
            width: 50%;
            display: flex;
            justify-content: space-between;
            li {
                line-height: 90px;
                color: #999;
                padding: 0 20px;
                font-size: 18px;
                position: relative;
                .tabindex {
                    cursor: pointer;
                }
                div {
                    position: absolute;
                    left: calc(50% - 25px);
                    bottom: 0;
                    width: 50px;
                    height: 4px;
                    border-radius: 2px;
                    background-color: #34e0da;
                    display: none;
                }
            }
            .active {
                color: #fff;
                div {
                    display: block;
                }
            }
        }
        .login {
            width: 5%;
            display: flex;
            align-items: center;
            img {
                width: 50px;
                height: 50px;
            }
        }
    }
}
</style>
