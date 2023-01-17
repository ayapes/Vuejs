import { createRouter,createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name:'home',
        component: Home
    },
    {
        path:'/about',
        name:'About',
        component:()=>import('../views/About.vue')
    },
    // 以下リンク増えるたびに書き加える
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
// main.jsでimportします
export default router