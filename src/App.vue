<template>
  <div id="app"> 
    <router-view></router-view>
  </div>
</template>

<script>
import Main from './components/main'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
body{
  background-color: #2c3e50;
}
#app {
  font-family: tahoma;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
