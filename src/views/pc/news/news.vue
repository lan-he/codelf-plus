<template>
    <div class="news">
        <Header></Header>
        <main>
            <div class="newlist-box">
                <Newlist></Newlist>
            </div>
            <p class="industry">Industry News</p>
            <ul class="news-ul">
                <li v-for="(item, index) in newslist" :key="index">
                    <div class="img">
                        <img :src="item.imgsrc" alt="" />
                    </div>
                    <div class="wenzi">
                        <p class="title">{{ item.title }}</p>
                        <p class="content">{{ item.content }}</p>
                        <p class="time">
                            <span>{{ item.time }}</span> <button>Games</button>
                        </p>
                    </div>
                </li>
            </ul>
            <div class="btn">More</div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/pc/header.vue'
import Footer from '@/components/pc/footer.vue'
import Newlist from '@/components/pc/newslist.vue'
export default {
    name: 'news',
    data() {
        return {
            newslist: [
                {
                    imgsrc: require('@/assets/images/news/news01.png'),
                    title: 'Value of Participation and Activity',
                    time: '2 days ago',
                    content:
                        'UneMeta is a social and market DAO project centered around creating a sustainable NFT ecosystem that benefits .....',
                },
                {
                    imgsrc: require('@/assets/images/news/news02.png'),
                    title: 'Value of Participation and Activity',
                    time: '2 days ago',
                    content:
                        'UneMeta is a social and market DAO project centered around creating a sustainable NFT ecosystem that benefits .....',
                },
                {
                    imgsrc: require('@/assets/images/news/news01.png'),
                    title: 'Value of Participation and Activity',
                    time: '2 days ago',
                    content:
                        'UneMeta is a social and market DAO project centered around creating a sustainable NFT ecosystem that benefits .....',
                },
                {
                    imgsrc: require('@/assets/images/news/news02.png'),
                    title: 'Value of Participation and Activity',
                    time: '2 days ago',
                    content:
                        'UneMeta is a social and market DAO project centered around creating a sustainable NFT ecosystem that benefits .....',
                },
                {
                    imgsrc: require('@/assets/images/news/news01.png'),
                    title: 'Value of Participation and Activity',
                    time: '2 days ago',
                    content:
                        'UneMeta is a social and market DAO project centered around creating a sustainable NFT ecosystem that benefits .....',
                },
                {
                    imgsrc: require('@/assets/images/news/news02.png'),
                    title: 'Value of Participation and Activity',
                    time: '2 days ago',
                    content:
                        'UneMeta is a social and market DAO project centered around creating a sustainable NFT ecosystem that benefits .....',
                },
            ],
        }
    },
    components: {
        Header,
        Footer,
        Newlist,
    },
}
</script>

<style lang="less" scoped>
.news {
    padding: 90px 0;
    color: #000;
    position: relative;
    top: 0;
    left: 0;
    main {
        background: #171717;
        padding: 20px 0 220px;
        overflow: hidden;
        .newlist-box {
            width: 1160px;
            margin: 30px auto;
        }
        .industry {
            color: #fff;
            font-size: 36px;
            width: 1160px;
            margin: 60px auto 20px;
            padding-bottom: 30px;
            border-bottom: 1px solid #414040;
        }
        .news-ul {
            width: 1160px;
            margin: 0px auto;
            li {
                width: 1160px;
                height: 252px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #414040;
                .img {
                    width: 321px;
                    height: 181px;
                    margin-right: 50px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .wenzi {
                    height: 181px;
                    .title {
                        font-size: 22px;
                        font-weight: bold;
                        font-stretch: normal;
                        line-height: 40px;
                        letter-spacing: 0px;
                        color: #fff;
                        margin-bottom: 20px;
                        transition: 0.2s;
                        &:hover {
                            color: #268aef;
                        }
                    }
                    .content {
                        width: 629px;
                        height: 46px;
                        font-size: 16px;
                        line-height: 30px;
                        letter-spacing: -0.2px;
                        color: #b0aeae;
                    }
                    .time {
                        font-size: 14px;
                        color: #999;
                        line-height: 40px;
                        margin: 30px 0;
                        button {
                            width: 70px;
                            height: 26px;
                            color: #999;
                            background-color: #414040;
                            border-radius: 13px;
                            border: solid 1px #999999;
                            margin-left: 20px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .btn {
            width: 155px;
            height: 48px;
            background-color: #292828;
            border-radius: 24px;
            border: solid 2px #fbfafa;
            margin: 61px auto;
            color: #fff;
            text-align: center;
            line-height: 48px;
            cursor: pointer;
        }
    }
}
</style>
