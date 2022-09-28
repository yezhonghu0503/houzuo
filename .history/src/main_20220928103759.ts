import { createApp } from 'vue'
import App from './App.vue'
//全局引入elementUI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// createApp(App).use(ElementPlus).mount('#app')
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app') 