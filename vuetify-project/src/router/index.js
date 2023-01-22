import { createRouter,createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [
    // 存在しないページにアクセスした場合はHOMEへリダイレクト
    {
        path: '/:paths(.*)*',
        name:'nothing',
        redirect:'/'
    },
    {
        path: '/',
        name:'home',
        component: Home
    },
    {
        path:'/concept',
        name:'Concept',
        component:()=>import('../views/ConceptView.vue')
    },
    
    {
        path:'/plan',
        name:'Plan',
        component:()=>import('../views/PlanView.vue')
    },
    
    {
        path:'/fair',
        name:'Fair',
        component:()=>import('../views/FairView.vue')
    },
    
    {
        path:'/contact',
        name:'Contact',
        component:()=>import('../views/ContactView.vue')
    },
    // 以下リンク増えるたびに書き加える
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
// main.jsでimportします
export default router