import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Particles from 'vue3-particles'
import { vfmPlugin } from 'vue-final-modal'

createApp(App).use(store).use(Particles).use(router).use(vfmPlugin).mount('#app')
