<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';
</script>

<template>
  <div class="countdown-frame">
    <VueCountdown
        :time="60 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
      常盤祭まで後
      <br><span style="font-size: 3em">{{ days }} 日 {{ hours }} 時間 {{ minutes }} 分 {{ seconds }} 秒 </span>
    </VueCountdown>
  </div>
</template>

<script>
export default {
  name: "CountDown"
}
</script>

<style scoped>

</style>