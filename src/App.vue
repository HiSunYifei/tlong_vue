<template>
  <my-header></my-header>
  <router-view></router-view>
</template>

<script>
  import myHeader from './components/Header'

  export default {
    components: {
      myHeader
    }
  }
</script>

<style>
  html {
    font-size: 62.5%;
  }
  body {
    /*background-color: #222222;*/
    /*background: url("./assets/imgs/backgroundImg.jpg") fixed;*/
    background-size: 100%;
    height: 100vh;
    overflow: auto;
  }
</style>
