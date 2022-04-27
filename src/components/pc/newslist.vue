<template>
  <div class="newslist">
    <ul class="news-list">
      <li>
        <div class="img">
          <img src="../../assets/images/home/NEWS01.png" alt="" />
        </div>
        <p class="title">Value of Participation and Activity</p>
        <p class="time">1 hours ago</p>
        <p class="content">
          UneMeta is a social and market DAO project centered around creating a
          sustainable NFT ecosystem that benefits partici-pants and the world at
          large.....
        </p>
      </li>
      <li>
        <div class="img">
          <img src="../../assets/images/home/NEWS02.png" alt="" />
        </div>
        <p class="title">Value of Participation and Activity</p>
        <p class="time">Jan 22,2022</p>
        <p class="content">
          UneMeta is a social and market DAO project centered around creating a
          sustainable NFT ecosystem that benefits partici-pants and the world at
          large.....
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "newslist",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.newslist {
  .news-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    li {
      width: 47%;
      .img {
        border-radius: 10px;
        overflow: hidden;
        img {
          width: 100%;
          transition: 0.5s;
          border-radius: 10px;
        }
        &:hover img {
          transform: scale(1.1);
        }
      }
      p {
        width: 100%;
        color: #999;
        line-height: 30px;
      }
      .title {
        font-size: 22px;
        color: #fff;
        margin: 10px 0;
        transition: 0.3s;
        &:hover {
          color: #268aef;
        }
      }
      .time {
        font-size: 14px;
        margin: 10px 0;
      }
      .content {
        font-size: 16px;
        letter-spacing: 0.5px;
      }
    }
  }
}
</style>