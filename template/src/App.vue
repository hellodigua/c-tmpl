<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>\{{ msg }}</h1>
    <demo></demo>
  </div>
</template>

<script>
import Demo from './lib/index'

export default {
  name: 'app',
  components: {
    Demo
  },
  data () {
    return {
      msg: 'Create Your Vue.js Component'
    }
  }
}
</script>

<style{{#sass}} lang="scss"{{/sass}}>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
