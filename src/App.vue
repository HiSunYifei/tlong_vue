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
</style>
