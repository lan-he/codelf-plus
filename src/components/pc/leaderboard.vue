<template>
  <div class="leaderboard">
    <p class="ranking-title">
            <span>Ranking</span>
            <ul>
              <li
              :class="Rankingtypecurrent == index ? 'active' : ''"
              v-for="(item, index) in Rankingtype"
              :key="index"
              @click="changeRankingtypecurrent(index)">
                  <span>{{ item }}</span>
              </li>
            </ul> 
          </p>
    <div class="ranking-content">
      <ul>
        <li class="no123">
          <div>
            <img src="@/assets/images/home/NO1.png" alt="" />
            <img src="@/assets/images/home/picture01.png" alt="" />
            <div>
              <p>Paul Geroge</p>
              <p>$1,008,699</p>
            </div>
          </div>
          <div>
            <img src="@/assets/images/home/NO2.png" alt="" />
            <img src="@/assets/images/home/picture02.png" alt="" />
            <div>
              <p>Paul Geroge</p>
              <p>$1,008,699</p>
            </div>
          </div>
          <div>
            <img src="@/assets/images/home/NO3.png" alt="" />
            <img src="@/assets/images/home/picture03.png" alt="" />
            <div>
              <p>Paul Geroge</p>
              <p>$1,008,699</p>
            </div>
          </div>
        </li>
        <li class="no4">
          <div>
            <i>4</i>
            <p>Paul Geroge</p>
            <p>$10,086</p>
          </div>
          <div>
            <i>5</i>
            <p>Paul Geroge</p>
            <p>$10,086</p>
          </div>
          <div>
            <i>6</i>
            <p>Paul Geroge</p>
            <p>$10,086</p>
          </div>
          <div>
            <i>7</i>
            <p>Paul Geroge</p>
            <p>$10,086</p>
          </div>
          <div>
            <i>8</i>
            <p>Paul Geroge</p>
            <p>$10,086</p>
          </div>
          <div>
            <i>9</i>
            <p>Paul Geroge</p>
            <p>$10,086</p>
          </div>
          <div>
            <i>10</i>
            <p>Paul Geroge</p>
            <p>$10,086</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "leaderboard",
  data() {
    return {
      Rankingtypecurrent: 0,
      Rankingtype: ["Week", "Month", "All"],
    };
  },
  methods: {
    changeRankingtypecurrent(index) {
      this.Rankingtypecurrent = index;
    },
  },
};
</script>

<style lang="less" scoped>
.leaderboard {
  .ranking-title {
    color: #fff;
    font-size: 36px;
    font-weight: 900;
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        margin: 0 0 0 30px;
        font-size: 16px;
        color: #999;
        font-weight: 400;
        height: 30px;
        line-height: 30px;
        text-align: center;
        width: 100px;
        border-radius: 30px;
        background-color: #292828;
        span {
          cursor: pointer;
        }
      }
      li.active {
        background-color: #268aef;
        color: #fff;
      }
    }
  }
  .ranking-content {
    width: 100%;
    height: 500px;
    background-color: #323232;
    margin: 30px 0;
    border-radius: 10px;
    ul {
      display: flex;
      justify-content: space-between;
      padding: 50px 30px 50px;
      box-sizing: border-box;
      li {
        width: 50%;
      }
      .no123 {
        img {
          width: 50px;
          height: 50px;
        }
        img:nth-child(2) {
          width: 80px;
          height: 80px;
        }
        > div {
          display: flex;
          justify-content: space-around;
          align-items: center;
          p {
            color: #fff;
            margin: 10px 0;
          }
          p:nth-child(2) {
            height: 30px;
            color: #8f8f8f;
            text-indent: 20px;
            background: url(../../assets/images/home/gold.png) no-repeat;
          }
        }
        > div + div {
          margin-top: 60px;
        }
      }
      li + li {
        border-left: 3px solid #3b3939;
      }
      .no4 {
        > div {
          display: flex;
          width: 100%;
          margin-bottom: 25px;
          color: #fff;
          justify-content: space-around;
          text-align: center;
          align-items: center;
          p:nth-child(3) {
            height: 25px;
            color: #8f8f8f;
            text-indent: 25px;
            background: url(../../assets/images/home/gold.png) no-repeat;
          }
          i {
            color: gray;
            font-weight: 900;
            font-size: 22px;
            text-align: center;
            display: block;
            width: 100px;
          }
        }
      }
    }
  }
}
</style>