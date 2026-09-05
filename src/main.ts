import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/main.css"
import { createYmaps } from 'vue-yandex-maps';
import App from './App.vue'

createApp(App).use(createYmaps({
    apikey: "API_KEY",
    strictMode: true})).mount('#app')
