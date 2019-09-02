
<template lang="pug">
  div#home
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript Appppppppppppppp"/>
    <HelloWorld2 msg="Welcome to Your Vue.js + TypeScript Appppppppppppppp"/>

    <router-link to="/">Homeeeee</router-link> |
    <router-link to="/about">About</router-link>
        <router-view/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld2.vue' // @ is an alias to /src
import HelloWorld2 from '@/components/HelloWorld.vue'
@Component({
  components: {
    HelloWorld,
    HelloWorld2
  }
})
export default class Home extends Vue {}
</script>
