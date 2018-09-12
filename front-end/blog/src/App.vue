<template>
  <div id="app">
    <div id="container">
      <home-header></home-header>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <home-footer></home-footer>
    <div id="bg"></div>
  </div>
</template>

<script>
import HomeHeader from "./components/header/Header";
import HomeFooter from "./components/footer/Footer";
export default {
  name: 'App',
  components: {HomeFooter, HomeHeader}
}
</script>

<style scoped>

  #app{
    width: 100%;
  }

  #container{
    width: 100%;
    min-height: 100vh;
    background-color: rgba(255,255,255,0.8);
  }

  #bg{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("https://blog-1252736437.cos.ap-shanghai.myqcloud.com/background.png") fixed repeat-y;
    background-size: 100%;
    filter: blur(2px);
    z-index: -1;
  }
</style>
