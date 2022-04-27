<template>
    <div class="markeetplace">
        <Header></Header>
        <main>
            <div class="black">
                <el-carousel trigger="click" :interval="4000" type="card" height="360px">
                    <el-carousel-item v-for="(item, index) in bannerlist" :key="index">
                        <img :src="item" alt="" />
                    </el-carousel-item>
                </el-carousel>
            </div>
            <Prop></Prop>
            <Nftgame></Nftgame>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/pc/header.vue'
import Footer from '@/components/pc/footer.vue'
import Prop from '@/components/pc/prop.vue'
import Nftgame from '@/components/pc/nftgame.vue'
export default {
    name: 'markeetplace',
    data() {
        return {
            bannerlist: [
                require('@/assets/images/markeetplace/banner01.png'),
                require('@/assets/images/markeetplace/banner02.png'),
                require('@/assets/images/markeetplace/banner03.png'),
                require('@/assets/images/markeetplace/banner04.png'),
            ],
        }
    },
    components: {
        Header,
        Footer,
        Prop,
        Nftgame,
    },
}
</script>

<style lang="less" scoped>
.markeetplace {
    padding: 90px 0;
    color: #000;
    position: relative;
    top: 0;
    left: 0;
    main {
        background: #171717;
        padding: 20px 0 220px;
        overflow: hidden;
        .black {
            width: 1160px;
            margin: 0 auto;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .el-carousel__item--card {
            width: 74%;
        }
        .el-carousel__item {
            left: -139px;
        }
        /deep/.el-carousel__arrow {
            width: 50px;
            height: 50px;
            font-size: 40px;
            background: rgba(0, 0, 0, 0.5);
        }
        /deep/.el-carousel__arrow--left {
            left: 95px;
        }
        /deep/.el-carousel__arrow--right {
            right: 95px;
        }
        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;
        }
        /deep/ .el-carousel__button {
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }
        /deep/ .el-carousel__indicator--horizontal button {
            background: #fff;
            opacity: 1;
        }
        /deep/li.is-active button {
            background: #34e0da;
        }
        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
            background-color: #d3dce6;
        }
    }
}
</style>
