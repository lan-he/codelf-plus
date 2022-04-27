<template>
    <div class="main-footer">
        <footer>
            <div class="footer">
                <ul>
                    <li>
                        <img src="@/assets/images/home/footerlogo.png" alt="" />
                        <p>&copy; 2022 Metabridge. All right reserved</p>
                    </li>
                    <li>
                        <div class="left">
                            <div class="img">
                                <img src="@/assets/images/home/bird.png" alt="" />
                            </div>
                            <div class="img">
                                <img src="@/assets/images/home/facebook.png" alt="" />
                            </div>
                            <div class="img">
                                <img src="@/assets/images/home/INS.png" alt="" />
                            </div>
                        </div>
                        <div class="selectbtn">
                            <!-- <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                    </el-select> -->
                            <img src="@/assets/images/home/usa.png" alt="" />
                            <span>USA</span>
                            <i class="el-icon-arrow-up"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'main-footer',
    data() {
        return {}
    },
}
</script>

<style lang="less" scoped>
.main-footer {
    footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 200px;
        background: #000;
        .footer {
            width: 1160px;
            margin: 0 auto;
            height: 100%;
            ul {
                width: 100%;
                height: 50px;
                padding: 75px 0;
                display: flex;
                justify-content: space-between;
                li {
                    width: 50%;
                    height: 50px;
                    display: flex;
                    color: #fff;
                    justify-content: flex-end;
                    align-items: center;
                    text-align: right;
                    > img {
                        margin-right: 50px;
                    }
                    p {
                        width: 50%;
                        text-align: left;
                        font-size: 14px;
                    }
                }
                li + li {
                    border-left: 1px solid gray;
                    box-sizing: border-box;
                    padding-left: 45px;
                    justify-content: flex-start;
                    display: flex;
                    justify-content: space-between;
                    .left {
                        display: flex;
                        justify-content: space-between;
                    }
                    .img {
                        width: 50px;
                        height: 50px;
                        background: #252524;
                        border-radius: 50%;
                        margin-right: 35px;
                    }
                    .selectbtn {
                        // /deep/.el-input {
                        //   font-size: 14px;
                        //   color: #fff;
                        // }
                        // /deep/.el-input__inner {
                        //   width: 100px;
                        //   height: 30px;
                        // }
                        // /deep/.el-select__caret.is-reverse {
                        //   transform: rotateZ(180deg);
                        // }
                        // /deep/.el-select__caret {
                        //   transform: rotateZ(0deg);
                        // }
                        // /deep/.el-input__icon {
                        //   line-height: 0;
                        // }
                        width: 90px;
                        height: 20px;
                        background: #2b2b2b;
                        border-radius: 5px;
                        font-size: 14px;
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        img {
                            width: 20px;
                            height: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>
