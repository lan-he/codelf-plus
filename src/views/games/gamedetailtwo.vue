<template>
  <div class="gamedetailtwo">
    <Header></Header>
    <main>
      <Gameinformation></Gameinformation>
      <p class="description">Game Description:</p>
      <p class="descr-essay">
        Contractors is a team-based competitive multiplayer shooter game for
        virtual reality devices. Experience the next level virtual warfare with
        hardcore controls, lethal weapons, customizable firefights.
      </p>
      <Prop></Prop>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/pc/header.vue";
import Footer from "@/components/pc/footer.vue";
import Prop from "@/components/pc/prop.vue";
import Gameinformation from "@/components/pc/gameinformation.vue";
export default {
  name: "gamedetailtwo",
  data() {
    return {
      options: [
        {
          id: "1",
          label: "All Coin",
        },
        {
          id: "2",
          label: "All Coin",
        },
      ],
      value: "1",
      price: [
        {
          id: "1",
          label: "Price",
        },
        {
          id: "2",
          label: "Price",
        },
      ],
      value1: "1",
      input: "",
    };
  },
  components: {
    Header,
    Footer,
    Prop,
    Gameinformation,
  },
};
</script>

<style lang="less" scoped>
.gamedetailtwo {
  padding: 90px 0;
  color: #000;
  position: relative;
  top: 0;
  left: 0;
  main {
    background: #171717;
    padding: 20px 0 220px;
    overflow: hidden;
    .description {
      width: 1160px;
      margin: 10px auto 20px;
      font-size: 22px;
      line-height: 24px;
      color: #fefefe;
    }
    .descr-essay {
      width: 1160px;
      margin: 0 auto;
      font-size: 16px;
      line-height: 24px;
      color: #999999;
      height: 40px;
      letter-spacing: 0.4px;
    }
  }
}
</style>