<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';
</script>

<template>
  <div class="countdown-frame">
    <VueCountdown
        :time="60 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
      <div class="countdown-label">常盤祭まであと</div>
      <br><span class="count-down">
      <span><span class="number">{{ days }}</span> <span>日</span>
      <span class="number">{{ hours }}</span> <span>時間</span></span>
      <span><span class="number">{{ minutes }}</span> <span>分</span>
      <span class="number">{{ seconds }}</span> <span>秒</span></span>
    </span>
    </VueCountdown>
  </div>
</template>

<script>
export default {
  name: "CountDown"
}
</script>

<style scoped lang="scss">
.countdown-frame {
  color: white;

}

.countdown-label {
  font-size: 1.5em;
  margin: -1em 0;
}

.count-down {
  font-size: 4em;

  > span .number {
    display: inline-block;
    font-size: 1em;
    width: 1em;
    text-align: right;
    font-family: 'Petit Formal Script', cursive;
  }

  > span > span {
    font-size: 0.5em;
  }

  > span {
    display: inline-block;
  }
}
</style>