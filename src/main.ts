import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/main.css"
import { createYmaps } from 'vue-yandex-maps';
import App from './App.vue'

createApp(App).use(createYmaps({
    apikey: "48d4fe68-d84b-4d68-b080-cc193396db4b",
    strictMode: true})).mount('#app')
