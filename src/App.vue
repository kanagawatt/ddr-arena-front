<template lang="pug">
  div#app
    div#header
      <router-link to="/">Home</router-link>
      nobr |
      <router-link to="/about">About</router-link>
      nobr |
      <router-link to="/battle">Battle</router-link> |
      LoginHeader
      a test
      router-view/

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LoginHeader from '@/components/LoginHeader.vue' // @ is an alias to /src
@Component({
  components: {
    LoginHeader
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header {
  a {
    font-weight: bold;
    margin : 20px;
  }
}

</style>
