import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: defineAsyncComponent(() => import(`../view/Home/Home.vue`)),
            meta: {
                title: '首页'
            }
        },
        {
            path: '/interiorDecoration',
            name: 'interiorDecoration',
            component: () => import(`../view/interiorDecoration/index.vue`),
            meta: {
                title: '室内装修'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = `${to.meta.title}`;
    }
    next()
})

router.afterEach((to, from) => {
    // console.log(to, from)
    console.log('afterEach')
})

export default router;