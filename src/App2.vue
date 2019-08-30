<template>

  <div>
    <button v-on:click="kanagawa('kanagawa')">kanagawaにすっぞ！！</button>
    <label>
      <input v-model="msg">
    </label><br>
      ==========================================================<br>
      App2<br>
      {{ msg }}<br>
  </div>
</template>
<style scoped>

</style>
<script>
  let msg = "message1";
    export default {
        data() {
            return {
                msg,
            }
        },
        methods: {
            kanagawa: function (test) {
                this.msg = test
            }
        }
    }
</script>
