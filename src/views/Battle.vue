<template lang="pug">
  div#battle
    button(v-on:click="getKonami()") getUserData
    p(v-html="msg")
</template>

<script>
import axios from 'axios'
const config = {
  headers: { 'Content-Type': 'application/json' }
}
export default {
  name: 'Battle',
  data () {
    return {
      msg: 'default'
    }
  },
  methods: {
    getKonami: function () {
      console.log("test")
    }
  }
}
</script>

<style scoped lang="scss">
button {
  width: 100px;
  height: 20px;
}

</style>
