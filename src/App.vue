<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    var lodash = require('lodash')
    window._ = lodash
  }
}
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
  }
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
  }
</style>
