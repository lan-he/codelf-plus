<template>
  <div class="nftgame">
    <div class="game-title">
      <span>NFT Games</span>
      <p>
        More
        <i class="el-icon-right"></i>
      </p>
    </div>
    <ul class="nftgamelist">
      <li v-for="(item, index) in nftgame" :key="index">
        <img :src="item.imgsrc" alt="" />
        <div class="right">
          <p class="name">{{ item.name }}</p>
          <p>Type: {{ item.type }}</p>
          <p>Company: {{ item.company }}</p>
          <p>State: {{ item.state }}</p>
          <p>Platform: {{ item.platform }}</p>
          <div class="btn">
            <div>
              <button @click="gogamedetail()" class="view">View</button>
            </div>
            <div>
              <button class="download">Download</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "nftgame",
  data() {
    return {
      nftgame: [
        {
          imgsrc: require("../../assets/images/game/NFT-01.png"),
          name: "Game Name",
          company: "ESPN",
          state: "Test",
          type: "PVP",
          platform: "MAC/PC",
        },
        {
          imgsrc: require("../../assets/images/game/NFT-03.png"),
          name: "Game Name",
          company: "ESPN",
          state: "Test",
          type: "PVP",
          platform: "MAC/PC",
        },
        {
          imgsrc: require("../../assets/images/game/NFT-02.png"),
          name: "Game Name",
          company: "ESPN",
          state: "Test",
          type: "PVP",
          platform: "MAC/PC",
        },
        {
          imgsrc: require("../../assets/images/game/NFT-04.png"),
          name: "Game Name",
          company: "ESPN",
          state: "Test",
          type: "PVP",
          platform: "MAC/PC",
        },
      ],
    };
  },
  methods: {
    gogamedetail() {
      this.$router.push("/Games/detail");
    },
  },
};
</script>

<style lang="less" scoped>
.nftgame {
  width: 1160px;
  margin: 50px auto;
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
  .nftgamelist {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 40px 0;
    li {
      width: 560px;
      height: 400px;
      background-color: #323232;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 10px;
      margin: 25px 0;
      display: flex;
      .right {
        margin-left: 30px;
        .name {
          font-size: 24px;
          line-height: 40px;
          color: #fbf9f9;
          margin-top: 10px;
        }
        p {
          font-size: 16px;
          line-height: 33px;
          color: #989898;
        }
        .btn {
          margin-top: 70px;
          button {
            width: 172px;
            height: 40px;
            background-color: #171717;
            border-radius: 20px;
            border: solid 1px #fbfbfc;
            color: #fff;
            margin-bottom: 20px;
          }
          .download {
            background-color: #268aef;
          }
        }
      }
    }
  }
}
</style>