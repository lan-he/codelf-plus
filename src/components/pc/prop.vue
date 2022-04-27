<template>
    <div class="prop-box">
        <div class="select">
            <el-select v-model="value">
                <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.id"> </el-option>
            </el-select>
            <el-select v-model="value1">
                <el-option v-for="item in price" :key="item.id" :label="item.label" :value="item.id"> </el-option>
            </el-select>
            <div class="search">
                <el-input v-model="input" prefix-icon="el-icon-search" placeholder="Search"></el-input>
            </div>
        </div>
        <div class="prop">
            <div class="left">
                <dl class="games">
                    <dt>Games <i class="el-icon-minus"></i></dt>
                    <dd>
                        <img src="@/assets/images/game/icon1.png" alt="" />
                        Warland
                    </dd>
                    <dd>
                        <img src="@/assets/images/game/icon2.png" alt="" />
                        Parland
                    </dd>
                    <dd>
                        <img src="@/assets/images/game/icon3.png" alt="" />
                        Sarland
                    </dd>
                    <dd>
                        <img src="@/assets/images/game/icon4.png" alt="" />
                        Darland
                    </dd>
                    <dd>
                        <img src="@/assets/images/game/icon5.png" alt="" />
                        Barland
                    </dd>
                    <dd>
                        <img src="@/assets/images/game/icon6.png" alt="" />
                        Larland
                    </dd>
                    <dd>
                        <img src="@/assets/images/game/icon7.png" alt="" />
                        Qarland
                    </dd>
                </dl>
                <dl class="parity">
                    <dt>Parity <i class="el-icon-minus"></i></dt>
                    <dd>
                        <i class="el-icon-full-screen"></i>
                        Common
                    </dd>
                    <dd>
                        <i class="el-icon-full-screen"></i>
                        Rare
                    </dd>
                    <dd>
                        <i class="el-icon-full-screen"></i>
                        Epic
                    </dd>
                    <dd>
                        <i class="el-icon-full-screen"></i>
                        Uncommon
                    </dd>
                    <dd>
                        <i class="el-icon-full-screen"></i>
                        Legendary
                    </dd>
                    <dd>
                        <i class="el-icon-full-screen"></i>
                        Ancient
                    </dd>
                </dl>
                <dl class="availability">
                    <dt>Availability <i class="el-icon-minus"></i></dt>
                    <dd>
                        <i class="el-icon-full-screen"></i>
                        Sold Out
                    </dd>
                    <dd>
                        <i class="el-icon-full-screen"></i>
                        Available
                    </dd>
                </dl>
                <dl class="type">
                    <dt>Type <i class="el-icon-minus"></i></dt>
                    <dd>
                        <i class="el-icon-full-screen"></i>
                        Snoop Dogg
                    </dd>
                    <dd>
                        <i class="el-icon-full-screen"></i>
                        Land Needs
                    </dd>
                    <dd>
                        <i class="el-icon-full-screen"></i>
                        Docks
                    </dd>
                </dl>
            </div>
            <ul class="prop-list">
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                    <div class="mengban">
                        <img src="@/assets/images/game/over.png" alt="" />
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/home/tnt.png" alt="" />
                    </div>
                    <div class="content">
                        <p class="name">Prop name</p>
                        <p class="money"><i></i>10,086</p>
                        <p class="introduce">This is game name</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'prop-box',
    data() {
        return {}
    },
}
</script>

<style lang="less" scoped>
.prop-box {
    .select {
        width: 1160px;
        margin: 45px auto 20px;
        /deep/.el-input__inner {
            background: #171717;
            border: 1px solid #268aef;
            color: #268aef;
            height: 32px;
            width: 180px;
            border-radius: 10px;
        }

        /deep/.el-input__icon {
            color: #268aef;
            line-height: 5px;
        }
        .el-select {
            margin-right: 28px;
        }
        .search {
            float: right;
            /deep/.el-input__inner {
                background: #414040;
                line-height: 65px;
                letter-spacing: 0px;
                border: 0;
                color: #171717;
                height: 32px;
                width: 180px;
                border-radius: 16px;
            }
            /deep/.el-input__inner::-webkit-input-placeholder {
                color: #171717;
            }
            /deep/.el-input__inner::-moz-placeholder {
                /* Mozilla Firefox 19+ */
                color: #171717;
            }
            /deep/.el-input__inner:-moz-placeholder {
                /* Mozilla Firefox 4 to 18 */
                color: #171717;
            }
            /deep/.el-input__inner:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: #171717;
            }
            /deep/.el-input__icon {
                color: #171717;
                line-height: 33px;
            }
        }
    }
    .prop {
        color: #fcfdfe;
        width: 1160px;
        margin: 50px auto;
        display: flex;
        justify-content: space-between;
        .left {
            width: 270px;
            dl {
                box-sizing: border-box;
                padding: 10px 0;
                text-indent: 10px;
                background: #323232;
                border-radius: 10px;
                margin-bottom: 10px;
            }
            dt {
                color: #268aef;
                display: flex;
                justify-content: space-between;
                align-items: center;
                line-height: 30px;
                font-size: 20px;
                i {
                    margin-right: 10px;
                }
                padding-bottom: 10px;
                border-bottom: 1px solid black;
            }
            dd {
                height: 63px;
                display: flex;
                align-items: center;
                font-size: 18px;
                color: #fcfdfe;
                font-weight: 100;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    margin: 0 20px 0 10px;
                }
            }
            .games {
                height: 502px;
            }
            .parity,
            .availability,
            .type {
                height: 352px;
                dd {
                    height: 50px;
                    img {
                        width: 20px;
                        height: 20px;
                    }
                    i {
                        margin-right: 45px;
                    }
                }
            }
            .availability {
                height: 167px;
            }
            .type {
                height: 260px;
            }
        }
        .prop-list {
            width: 865px;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            li {
                width: 200px;
                height: 301px;
                background: #323232;
                border-radius: 10px;
                margin: 0 0 10px;
                box-sizing: border-box;
                border: 2px solid #171717;
                transition: 0.5s;
                position: relative;
                top: 0;
                left: 0;
                &:hover {
                    border-color: #268aef;
                }
                .img {
                    width: 100%;
                    border-radius: 10px 10px 0 0;
                    background-color: #414040;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 210px;
                    img {
                        flex: 0 0 auto;
                        width: 130px;
                        height: 156px;
                    }
                }
                .content {
                    box-sizing: border-box;
                    padding: 3px 20px;
                    line-height: 27px;
                    color: #9b9b9b;
                    .money {
                        i {
                            display: inline-block;
                            width: 15px;
                            height: 15px;
                            background-color: #e7ad32;
                            border-radius: 50%;
                            margin-right: 5px;
                        }
                    }
                }
                .mengban {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    border-radius: 10px 10px 0 0;
                    background-color: black;
                    opacity: 0.8;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 210px;
                    img {
                        flex: 0 0 auto;
                        width: 135px;
                        height: 118px;
                    }
                }
            }
        }
    }
}
</style>
