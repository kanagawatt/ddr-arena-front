<template lang="pug">
  div#app
    div#nav
      router-link(to="/")
        span.linkText home
      <router-link to="/">Homeeeee</router-link> |
      <router-link to="/about">About</router-link>
      <router-view/>
      p kanagawa
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    margin-right : 10px;
  }
  p {
    color : red
  }
}
</style>
