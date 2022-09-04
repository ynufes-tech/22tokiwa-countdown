<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Hoshizora/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Hoshizora from './HoshizoraBackground'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Hoshizora
  }
}
</script>
