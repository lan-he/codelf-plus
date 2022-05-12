<template>
    <div class="news-detile">
        <div class="news-detile-top">
            <div class="fanhui" @click="$router.go(-1)">
                <i class="iconfont icon-direction-left"></i>
            </div>
            <img src="@/assets/images/news/news02.png" />
        </div>
        <div class="news-detile-box">
            <div class="new-description">
                <div class="new-description-name">Value of Participation and Activity</div>
                <p class="new-description-company">By Metabridge / Apr 08, 2022 Game · 375view</p>
            </div>
            <div class="new-detiles">
                <p>
                    Avatar is directed by James Cameron.The two main characters are Jake Sully,played by Sam
                    Worthington,and Neytiri,played by Zoe Saldana.∂
                </p>
                <p>
                    Clones named Avatars are sent to Pandora Planet to persuade people there to leave the planet so that
                    human beings can exploit a rare mineral.Jake is sent there to control his Avatar.
                </p>
                <p>
                    However,he comes across Neytiri and they fall in love with each other.Jake begins to see that nature
                    and the planet should be protected.At last he and the people there work together to defeat human
                    beings and send them back to the earth.
                </p>
                <p>3D technology and the beautiful natural scenery are the two highlights of the film.</p>
            </div>
            <MobileNewsList />
        </div>
    </div>
</template>
<script>
import MobileNewsList from '@/components/mobile/mobile-news-list.vue'
export default {
    name: 'news-detile',
    data() {
        return {
            swiperOption: {
                direction: 'horizontal',
                loop: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 20,
                observer: true,
                observeParents: true,
                // slidesPerView: 'auto',
                // spaceBetween: 10,
                // freeMode: true,
            },
        }
    },
    components: { MobileNewsList },
}
</script>
<style lang="less" scoped>
.news-detile {
    background-color: #171717;
    .news-detile-top {
        img {
            height: 422px;
            display: block;
        }
        .fanhui {
            width: 64px;
            height: 64px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 50%;
            position: absolute;
            top: 32px;
            left: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            i {
                color: #fcfbfb;
                font-size: 40px;
            }
        }
    }
    .news-detile-box {
        padding: 35px;
        box-sizing: border-box;

        .new-description {
            border-bottom: 1px solid #414040;
            padding-bottom: 48px;
            .new-description-name {
                font-size: 34px;
                font-weight: bold;
                color: #fbf9f9;
            }
            .new-description-company {
                font-size: 24px;
                font-weight: 400;
                color: #999999;
                margin-top: 39px;
            }
        }
        .new-detiles {
            border-bottom: 1px solid #414040;
            padding-top: 46px;
            padding-bottom: 80px;
            p {
                font-size: 28px;
                font-weight: 400;
                color: #b8b8b8;
                margin-bottom: 50px;
                line-height: 48px;
            }
        }
    }
}
</style>
