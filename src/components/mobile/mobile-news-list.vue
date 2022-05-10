<template>
    <div class="news-list">
        <div class="news-list-item" v-for="item in 6" :key="item">
            <img src="@/assets/images/news/news01.png" />
            <div class="new-left">
                <p class="news-titile">This is news name you can write every things about matabridge</p>
                <div>
                    <span class="news-days">2 days ago</span>
                    <span class="news-game">Game</span>
                </div>
            </div>
        </div>
        <div class="news-more">More</div>
    </div>
</template>
<script>
export default {
    name: 'news-list',
    data() {
        return {}
    },
}
</script>
<style lang="less" scoped>
.news-list {
    margin-top: 35px;
    .news-list-item {
        height: 208px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #414040;
        img {
            width: 200px;
            height: 150px;
        }
        .new-left {
            margin-left: 33px;
        }
        .news-titile {
            font-size: 28px;
            font-weight: 400;
            color: #fbf9f9;
            margin-bottom: 36px;
        }
        .news-days {
            font-size: 20px;
            font-weight: 400;
            color: #999999;
        }
        .news-game {
            font-size: 20px;
            font-weight: 400;
            color: #999999;
            border: 1px solid #999999;
            border-radius: 20px;
            padding: 0 6px;
            margin-left: 30px;
        }
    }
    .news-more {
        width: 300px;
        height: 60px;
        border: 2px solid #fbfafa;
        border-radius: 30px;
        font-size: 28px;
        font-weight: 500;
        color: #fbf8f8;
        margin: auto;
        margin-top: 72px;
        line-height: 60px;
        text-align: center;
    }
}
</style>
