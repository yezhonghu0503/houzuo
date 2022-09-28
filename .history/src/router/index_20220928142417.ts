import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', name: 'home',
            component: defineAsyncComponent(() => import(`../view/Home/Home.vue`)),
            meta:{
                title:'首页'
            }
        },
        {
            path: '/interiorDecoration', name: 'interiorDecoration',
            component: defineAsyncComponent(() => import(`../view/interiorDecoration/index.vue`)),
            meta:{
                title:'室内装修'
            }
        }
    ]
})