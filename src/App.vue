<template>

  <div>
    <button v-on:click="setDefault()">「りんご」が好き</button>
    <button v-on:click="setter('default ni henkou shimasu')">defaultにすっぞ！！</button>
    <button v-on:click="kanagawa('kanagawa')">kanagawaにすっぞ！！</button>
    <p>
      {{ msg }}
      {{ msg2 }}
      {{ 1 + 1 }}
    </p>
  </div>
</template>

<style scoped>

</style>
<script>

  var msg = "message1"
  var setter = function(str) {
      this.msg = str
  }
  var setDefault = function() {
      console.log("push method")
      this.msg = "default"
  }

    export default {
        data() {
            return {
                msg,
                msg2: "message2"
            }
        },
        methods: {
            kanagawa: function (test) {
                console.log(test)
                console.log(this.msg)
                this.msg = test
                console.log(this.msg)
            },setDefault,setter
        }
    }
</script>
