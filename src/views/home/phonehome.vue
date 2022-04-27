<template>
  <div class="phonecomming">
    <img class="coming" src="../../assets/images/home/phonecoming.png" alt="" />
    <img
      class="xuanzuhuan"
      src="../../assets/images/home/phonexuanzhuan.png"
      alt=""
    />
    <p>&copy; 2022 Metabridge. All rights reserved</p>
  </div>
</template>

<script>
export default {
  name: "phonecomming",
  data() {
    return {};
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.phonecomming {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/images/home/phonebigbg.png") no-repeat;
  background-size: 100% 100%;
  .coming {
    width: 60%;
    position: absolute;
    top: 50%;
    left: calc(50% - 112.5px);
  }
  .xuanzuhuan {
    width: 55%;
    position: absolute;
    top: 210px;
    left: calc(50% - 100px);
    animation: xuanzhuan 50s infinite linear;
  }
  p {
    width: 100%;
    position: absolute;
    bottom: 200px;
    left: 0;
    text-align: center;
    letter-spacing: 1px;
    color: #fff;
  }
}
@keyframes xuanzhuan {
  0% {
    transform: rotateZ(0deg) scale(1);
  }
  50% {
    transform: rotateZ(180deg) scale(1.3);
  }
  100% {
    transform: rotateZ(360deg) scale(1);
  }
}
</style>