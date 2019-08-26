<template>
  <div>
    <p>
      {{ msg }}
      {{ msg }}
      {{ kanagawa }}
    </p>
  </div>
</template>

<style scoped>

</style>
<script>
    export default {
        kanagawa : "test",
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>
