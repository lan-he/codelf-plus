<template>
  <div class="popwindow" @click="changeaaa">
    <img src="../assets/images/home/bgimg.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "popwindow",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    changeaaa() {
      this.$emit("zidingyishijianming", this.show);
    },
  },
};
</script>

<style lang="less" scoped>
.popwindow {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  text-align: center;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  img {
    margin-top: 200px;
  }
}
</style>