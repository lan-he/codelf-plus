<template>
    <div class="news">
        <MobileHeader />
        <div class="news-centent">
            <img class="news-img" src="@/assets/images/news/news02.png" alt="" />
            <MobileNewsList />
        </div>
    </div>
</template>
<script>
import MobileHeader from '@/components/mobile/mobile-header.vue'
import MobileNewsList from '@/components/mobile/mobile-news-list.vue'
export default {
    name: 'news',
    data() {
        return {}
    },
    components: { MobileHeader, MobileNewsList },
}
</script>
<style lang="less" scoped>
.news {
    background-color: #171717;
    .news-centent {
        box-sizing: border-box;
        padding: 0 30px;
        padding-bottom: 100px;
        .news-img {
            height: 388px;
            margin-top: 26px;
        }
    }
}
</style>
