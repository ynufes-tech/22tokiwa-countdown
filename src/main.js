import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Particles from 'vue3-particles'

createApp(App).use(store).use(Particles).use(router).mount('#app')
