<script setup>
import CountDown from "@/components/CountDown";
</script>


<template>
  <div class="container">
    <div class="countdown-frame">
      <div class="theme">
        <div class="theme-label">2022横浜国立大学<br>常盤祭 テーマ</div>
        <div class="theme-title">星彩</div>
      </div>
      <div class="date">開催期間: 10/28~30</div>
      <CountDown/>
      <div class="image-button-area">
        <a href="https://camp-fire.jp/projects/view/619125" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/funding.webp" alt="クラウドファンディングのご案内"/>
        </a>
        <a href="https://www.pokemonunite.jp/ja/news/82/" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/pokemon.webp" alt="ポケモン企画の紹介"/>
        </a>
      </div>
    </div>

    <router-view class="router-view"/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: 'Klee One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
}

.image-button-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3vw;

  img {
    width: min(40vw, 30vh);
    aspect-ratio: 1;
  }
}


.container {
  position: relative;
  height: 100vh;
  width: 100vw;
}

.countdown-frame {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
}

.theme {
  font-size: min(1.5vw, 2vh);
}

.theme-title {
  font-size: 10em;
}

.theme-label {
  font-size: 2em;
  margin-bottom: -1em;
}

.date {
  font-size: 1.2em;
  margin-top: -0.7em;
  margin-bottom: 2em;
}

.countdown-label {
  font-size: 1.5em;
}

.count-down {
  font-size: 4em;
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

@media screen and (max-width: 520px) {

  .theme-label {
    font-size: 3em;
  }

  .theme-title {
    font-size: 12em;
  }

  .date {
    font-size: 1em;
  }

  .countdown-label {
    font-size: 1.5em;
  }

  .count-down {
    font-size: 10vw;
  }
}
</style>
