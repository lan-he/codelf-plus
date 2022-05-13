<template>
    <div class="login">
        <i class="iconfont icon-close" @click="$router.go(-1)"></i>
        <img class="login-top-img" src="@/assets/images/login/mobile-login-logo.png" />
        <div class="input-box">
            <i class="iconfont icon-youxiang"></i>
            <input type="text" placeholder="E-mail address" />
            <div class="line-down"></div>
        </div>
        <div class="input-box password">
            <i class="iconfont icon-youxiang"></i>
            <input type="text" placeholder="Password" />
            <div class="line-down"></div>
        </div>
        <div class="login-button">Login</div>
        <div class="login-button login-button-sin">Sign up</div>
        <p class="forgot-your-password">Forgot your password?</p>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {}
    },
}
</script>
<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background: #171717;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .icon-close {
        position: absolute;
        top: 26px;
        right: 48px;
        font-size: 50px;
        color: #e8e8e8;
    }
    .login-top-img {
        width: 222px;
        height: 133px;
        margin-top: 84px;
    }
    .input-box {
        width: 600px;
        height: 80px;
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 192px;
        i {
            color: #fff;
        }
        input {
            background: transparent;
            font-size: 12px;
            font-weight: 400;
            color: #888888;
            margin-left: 13px;
        }
        .line-down {
            position: absolute;
            width: 100%;
            height: 1px;
            background: #888888;
            left: 0;
            bottom: 0px;
        }
    }
    .password {
        margin-top: 80px;
    }
    .login-button {
        width: 480px;
        height: 80px;
        background: linear-gradient(-9deg, #9340f9, #268aef);
        border-radius: 40px;
        font-size: 32px;
        font-weight: 500;
        color: #ffffff;
        text-align: center;
        line-height: 80px;
        margin-top: 227px;
    }
    .login-button-sin {
        background: transparent;
        margin-top: 73px;
        border: 1px solid #fdfdfd;
    }
    .forgot-your-password {
        font-size: 24px;
        font-weight: 400;
        text-decoration: underline;
        color: #888888;
        margin-top: 143px;
    }
}
</style>
