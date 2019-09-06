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
      axios.get('http://localhost:8888', config)
        .then(response => {
          this.msg = response.data
          console.log(this.msg.data)
          window.location = 'https://p.eagate.573.jp/game/ddr/ddra20/p/login.html'
        })
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
