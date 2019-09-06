<template lang="pug">
  div#login
    h1 This is a login page
    form(v-on:submit.prevent="submit()")
      <input v-model="msg">
    p {{ msg }}
    p {{ msg }}
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'LoginHeader',
  data () {
    return {
      msg: 'test'
    }
  },
  methods: {
    submit: function (test) {
      console.log('teswwfes')
      this.msg = 'tesfsf'
      var puppeteerr = require('puppeteer')
      console.log(puppeteerr)
    }
  }
}
</script>
