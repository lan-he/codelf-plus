<template>
  <div class="gamedetail">
    <Header></Header>
    <main>
      <Gameinformation></Gameinformation>
      <Nftgame></Nftgame>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/pc/header.vue";
import Footer from "@/components/pc/footer.vue";
import Nftgame from "@/components/pc/nftgame.vue";
import Gameinformation from "@/components/pc/gameinformation.vue";
export default {
  name: "gamedetail",
  data() {
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    Header,
    Footer,
    Nftgame,
    Gameinformation,
  },
};
</script>

<style lang="less" scoped>
.gamedetail {
  padding: 90px 0;
  color: #000;
  position: relative;
  top: 0;
  left: 0;
  main {
    background: #171717;
    padding: 20px 0 220px;
    overflow: hidden;
  }
}
</style>