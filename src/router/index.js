import Vue from 'vue'
import Router from 'vue-router'
import Gp from '@/components/Gp.vue'
import About from '@/components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Gp',
        component: Gp
    }, {
        path: '/about',
        name: 'About',
        component: About
    }]
})
