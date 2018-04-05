<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    @import './assets/css/materialize.min.css';
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    @import './assets/css/main-style.css';
</style>
