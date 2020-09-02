import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import resourceCrud from '../views/resourceCrud.vue'

Vue.use(VueRouter)
  //类型是routeConfig的数组
  const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    //子集
    children: [
      {name: 'home', path: '/', component: Home},
      {name: 'table-list', path: '/:resource/list', component: resourceCrud, props: true},
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
