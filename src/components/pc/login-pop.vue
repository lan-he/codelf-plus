<template>
    <div class="login-pop">
        <div class="login-mode">
            <div class="login-mode-block">
                <i class="el-icon-close" @click="$emit('closeLogin')"></i>
                <span class="login-mode-block-welcome">Welcome To Metabridge!</span>
                <div class="input-box">
                    <i class="iconfont icon-youxiang"></i>
                    <input type="text" placeholder="E-mail address" />
                    <div class="line-down"></div>
                </div>
                <div class="input-box">
                    <i class="iconfont icon-youxiang"></i>
                    <input type="text" placeholder="Password" />
                    <div class="line-down"></div>
                </div>
                <div class="remember-password">
                    <input type="checkbox" id="cbox" value="first_checkbox" class="checkbox" />
                    <label for="cbox">Remember password</label>
                </div>
                <div class="login">Login</div>
            </div>
            <div class="line"></div>
            <div class="login-mode-block">
                <img class="qrcode" src="@/assets/images/home/web-login-qrcode.png" alt="" />
                <p class="please-open">Please open metabridge app or other app</p>
                <div class="please-logos">
                    <img src="@/assets/images/home/bird.png" alt="" />
                    <img src="@/assets/images/home/facebook.png" alt="" />
                    <img src="@/assets/images/home/INS.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login-pop',
    data() {
        return {}
    },
}
</script>

<style lang="less" scoped>
.login-pop {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-mode {
        width: 675px;
        height: 390px;
        background: url('../../assets/images/home/web-loginbg.png');
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        position: relative;
        .el-icon-close {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
            color: #888;
        }
        .login-mode-block {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .login-mode-block-welcome {
                font-size: 17px;
                font-weight: 500;
                color: #fdfcfc;
                margin-bottom: 40px;
            }
            .input-box {
                width: 225px;
                height: 40px;
                position: relative;
                display: flex;
                align-items: center;
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
            .remember-password {
                width: 225px;
                font-size: 12px;
                font-weight: 400;
                color: #888888;
                .checkbox {
                    width: 11px;
                    height: 10px;
                    border: 1px solid #888888;
                    border-radius: 3px;
                    margin-right: 9px;
                    margin-top: 9px;
                    background: transparent;
                }
            }
            .login {
                width: 169px;
                height: 34px;
                background: linear-gradient(-9deg, #9340f9, #268aef);
                border-radius: 17px;
                font-size: 14px;
                font-weight: 500;
                color: #ffffff;
                text-align: center;
                line-height: 34px;
                margin-top: 46px;
            }
            .qrcode {
                width: 93px;
                height: 93px;
            }
            .please-open {
                font-size: 11px;
                margin-top: 17px;
                font-weight: 400;
                color: #888888;
            }
            .please-logos {
                width: 180px;
                display: flex;
                justify-content: space-between;
                margin-top: 26px;
                img {
                    width: 42px;
                    height: 42px;
                }
            }
        }
        .line {
            width: 1px;
            height: 169px;
            background: #333333;
        }
    }
}
</style>
