<template>
  <div class="information">
    <p class="title">Game Name</p>
    <div class="content">
      <div class="bigimg">
        <img :src="imgsrc" alt="" />
        <ul>
          <li v-for="(item, index) in gamelist" :key="index">
            <img :src="item" alt="" @click="changeimgsrc(item, index)" />
            <img
              :class="index === current ? 'ok' : 'no'"
              src="../../assets/images/game/ok.png"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div class="gamecontent">
        <div class="top">
          <img src="../../assets/images/game/icon4.png" alt="" />
          <p class="name">Game Name</p>
          <p>Type: PVP</p>
          <p>Company: ESPN</p>
          <p>State: Test</p>
          <p>Platform: MAC/PC</p>
          <p><a>Official Website</a></p>
        </div>
        <div class="essay">
          Contractors is a team-based competitive multiplayer shooter game for
          virtual reality devices. Experience the next level virtual warfare
          with hardcore controls, lethal weapons, customizable firefights.
        </div>
        <button>download</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "information",
  data() {
    return {
      current: 0,
      imgsrc: require("../../assets/images/game/gamebigimg.png"),
      gamelist: [
        require("../../assets/images/game/gamebigimg.png"),
        require("../../assets/images/game/gamebigimg.png"),
        require("../../assets/images/game/small.png"),
        require("../../assets/images/game/small.png"),
        require("../../assets/images/game/small.png"),
      ],
    };
  },
  methods: {
    changeimgsrc(item, index) {
      this.current = index;
      this.imgsrc = item;
    },
  },
};
</script>

<style lang="less" scoped>
.information {
  width: 1160px;
  margin: 30px auto;
  .title {
    font-size: 36px;
    font-weight: bold;
    line-height: 34px;
    color: #fcf9f9;
  }
  .content {
    margin-top: 40px;
    display: flex;
    width: 1160px;
    height: 544px;
    box-sizing: border-box;
    padding: 11px;
    background: #323232;
    border-radius: 10px;
    .bigimg {
      width: 759px;
      height: 544px;
      img {
        width: 759px;
        height: 427px;
      }
      ul {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        li {
          width: 148px;
          height: 85px;
          position: relative;
          top: 0;
          left: 0;
          img {
            width: 100%;
            height: 100%;
          }
          .no {
            width: 100%;
            height: 100px;
            position: absolute;
            top: -15px;
            left: 0;
            display: none;
          }
          .ok {
            width: 100%;
            height: 100px;
            position: absolute;
            top: -15px;
            left: 0;
            display: block;
          }
        }
      }
    }
    .gamecontent {
      flex: 1 1 auto;
      display: flex;
      flex-wrap: wrap;
      .top {
        width: 100%;
        text-align: center;
        img {
          width: 100px;
          height: 100px;
          margin-bottom: 8px;
        }
        .name {
          font-size: 24px;
          line-height: 36px;
          color: #fbf9f9;
          margin-top: 10px;
        }
        p {
          width: 200px;
          font-size: 16px;
          line-height: 24px;
          color: #989898;
          margin-left: 120px;
          text-align: left;
        }
        a {
          color: #268aef;
          font-size: 16px;
          line-height: 28px;
          text-decoration: underline;
        }
      }
      .essay {
        width: 332px;
        height: 112px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.3px;
        color: #b0aeae;
        margin: 10px auto;
        padding-top: 20px;
        border-top: solid 1px #242323;
      }
      button {
        width: 300px;
        height: 60px;
        border-radius: 10px;
        margin: 10px auto;
        color: #fff;
        font-size: 20px;
        background: #268aef url(../../assets/images/game/andio.png) no-repeat
          20% center;
      }
    }
  }
}
</style>