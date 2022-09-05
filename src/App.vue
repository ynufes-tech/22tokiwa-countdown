<script setup>
import CountDown from "@/components/CountDown";
</script>


<template>
  <div class="container">
<!--    <div>-->
      <CountDown class="countdown-frame">

      </CountDown>

<!--</div>-->

    <router-view class="router-view"/>
  </div>
</template>

<style lang="scss">
body{
  margin: 0;
}

#app {
  font-family: 'Klee One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  position: relative;
  height: 100vh;
  width: 100vw;
}
.countdown-frame{
  position: absolute;
  background: #ffffff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
