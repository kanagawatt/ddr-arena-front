<template lang="pug">
  span#loginHeader(v-if="isLogin() == null")
    router-link(to="/login")
      span.linkText login
  span#loginHeader(v-else)
    nobr logined
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'LoginHeader',
  methods: {
    isLogin: function () {
      var sessionId = Cookies.get('sessionId')
      console.log(sessionId)
      return sessionId
    }
  }
}
</script>

<style scoped>

</style>
