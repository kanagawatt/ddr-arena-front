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
import login from './login'
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
      console.log(login)
      login()
      this.msg = 'tesfsf'
    }
  }
}
</script>
