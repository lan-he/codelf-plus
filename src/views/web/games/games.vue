<template>
    <div class="games">
        <Header></Header>
        <main>
            <div class="gamelist">
                <div class="game-title">
                    <span>IAA Games</span>
                    <p>
                        More
                        <i class="el-icon-right"></i>
                    </p>
                </div>
                <ul class="listgame">
                    <li v-for="(item, index) in gamelist" :key="index">
                        <img :src="item.imgsrc" alt="" />
                        <p class="name">{{ item.name }}</p>
                        <p class="property">{{ item.property }}</p>
                        <button @click="gogamedetail()">View</button>
                        <div v-if="item.type === 'Hot'" :class="item.type === 'Hot' ? 'hot top-right' : ''">
                            {{ item.type }}
                        </div>
                        <div v-if="item.type === 'Free'" :class="item.type === 'Free' ? 'free top-right' : ''">
                            {{ item.type }}
                        </div>
                        <div v-if="item.type === 'New'" :class="item.type === 'New' ? 'new top-right' : ''">
                            {{ item.type }}
                        </div>
                    </li>
                </ul>
                <div class="game-title">
                    <span>Competitive Games</span>
                    <p>
                        More
                        <i class="el-icon-right"></i>
                    </p>
                </div>
                <ul class="listgame">
                    <li v-for="(item, index) in gamelist1" :key="index">
                        <img :src="item.imgsrc" alt="" />
                        <p class="name">{{ item.name }}</p>
                        <p class="property">{{ item.property }}</p>
                        <button @click="gogamedetail()">View</button>
                        <div v-if="item.type === 'Hot'" :class="item.type === 'Hot' ? 'hot top-right' : ''">
                            {{ item.type }}
                        </div>
                        <div v-if="item.type === 'Free'" :class="item.type === 'Free' ? 'free top-right' : ''">
                            {{ item.type }}
                        </div>
                        <div v-if="item.type === 'New'" :class="item.type === 'New' ? 'new top-right' : ''">
                            {{ item.type }}
                        </div>
                    </li>
                </ul>
                <Nftgame></Nftgame>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/pc/header.vue'
import Footer from '@/components/pc/footer.vue'
import Nftgame from '@/components/pc/nftgame.vue'
export default {
    name: 'games',
    data() {
        return {
            gamelist: [
                {
                    imgsrc: require('@/assets/images/game/icon1.png'),
                    name: 'Tank Hero',
                    property: 'property',
                    type: 'Hot',
                },
                {
                    imgsrc: require('@/assets/images/game/icon2.png'),
                    name: 'Tank Hero',
                    property: 'property',
                    type: 'Free',
                },
                {
                    imgsrc: require('@/assets/images/game/icon3.png'),
                    name: 'Tank Hero',
                    property: 'property',
                    type: 'New',
                },
                {
                    imgsrc: require('@/assets/images/game/icon4.png'),
                    name: 'Tank Hero',
                    property: 'property',
                },
            ],
            gamelist1: [
                {
                    imgsrc: require('@/assets/images/game/icon5.png'),
                    name: 'Tank Hero',
                    property: 'property',
                    type: 'Hot',
                },

                {
                    imgsrc: require('@/assets/images/game/icon6.png'),
                    name: 'Tank Hero',
                    property: 'property',
                    type: 'Free',
                },
                {
                    imgsrc: require('@/assets/images/game/icon7.png'),
                    name: 'Tank Hero',
                    property: 'property',
                },
                {
                    imgsrc: require('@/assets/images/game/icon8.png'),
                    name: 'Tank Hero',
                    property: 'property',
                },
            ],
        }
    },
    methods: {
        gogamedetail() {
            this.$router.push('/Games/detail')
        },
    },
    components: {
        Header,
        Footer,
        Nftgame,
    },
}
</script>

<style lang="less" scoped>
.games {
    padding: 90px 0;
    color: #000;
    position: relative;
    top: 0;
    left: 0;
    main {
        background: #171717;
        padding-bottom: 220px;
        overflow: hidden;
        .gamelist {
            width: 1160px;
            margin: 40px auto;
            .game-title {
                color: #fff;
                font-size: 36px;
                font-weight: 900;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p {
                    width: 100px;
                    height: 30px;
                    background: #292828;
                    border-radius: 30px;
                    text-align: center;
                    line-height: 30px;
                    color: #bdbcbc;
                    font-size: 16px;
                    font-weight: 400;
                    cursor: pointer;
                    transition: 0.3s;
                    &:hover {
                        color: #268aef;
                    }
                }
            }
            .listgame {
                display: flex;
                justify-content: space-between;
                margin: 50px 0;
                li {
                    width: 260px;
                    height: 320px;
                    background-color: #323232;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    top: 0;
                    left: 0;
                    img {
                        width: 132px;
                        height: 132px;
                        background-color: #268aef;
                        border-radius: 20px;
                        margin: 40px 0 10px;
                    }
                    .name {
                        width: 99px;
                        font-size: 20px;
                        // line-height: 40px;
                        color: #fbf9f9;
                    }
                    .property {
                        font-size: 16px;
                        color: #999999;
                        margin: 10px 0 20px;
                    }
                    button {
                        width: 100px;
                        height: 40px;
                        background-color: #171717;
                        border-radius: 20px;
                        border: solid 1px #fbfbfc;
                        color: #fff;
                        transition: 0.3s;
                        &:hover {
                            background-color: #268aef;
                        }
                    }
                    .top-right {
                        width: 63px;
                        height: 25px;
                        color: #fff;
                        background-color: #e51f1f;
                        border-radius: 0px 10px 0px 10px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        text-align: center;
                    }
                    .hot {
                        background-color: #e51f1f;
                    }
                    .free {
                        background-color: #12d1ab;
                    }
                    .new {
                        background-color: #f55719;
                    }
                }
            }
        }
    }
}
</style>
