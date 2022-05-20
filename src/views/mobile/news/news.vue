<template>
    <div class="news">
        <MobileHeader />
        <div class="news-centent">
            <MobileNewsBanner />
            <MobileNewsList />
        </div>
    </div>
</template>
<script>
import MobileHeader from '@/components/mobile/mobile-header.vue'
import MobileNewsList from '@/components/mobile/mobile-news-list.vue'
import MobileNewsBanner from '@/components/mobile/mobile-news-banner.vue'
export default {
    name: 'news',
    data() {
        return {}
    },
    components: { MobileHeader, MobileNewsList, MobileNewsBanner },
}
</script>
<style lang="less" scoped>
.news {
    background-color: #171717;
    .news-centent {
        box-sizing: border-box;
        padding: 0 30px;
        padding-bottom: 100px;
    }
}
</style>
