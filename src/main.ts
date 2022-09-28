import { createApp } from 'vue'
import App from './App.vue'
//全局引入elementUI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// createApp(App).use(ElementPlus).mount('#app')
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app') 