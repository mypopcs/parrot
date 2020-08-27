import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
// import DictionaryList from '../views/dictionarys/DictionaryList.vue'
// import VocabularyList from '../views/vocabularys/VocabularyList.vue'
import UserList from '../views/users/userList.vue'
// import UserVip from '../views/users/userVip.vue'
// import DictionaryEdit from '../views/dictionarys/DictionaryEdit.vue'

Vue.use(VueRouter)
  //类型是routeConfig的数组
  const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    //子集
    children: [
      {name: 'home', path: '/', component: Home},
      // {name: 'dictionarys-list', path: '/dictionarys/list', component: DictionaryList},
      // {name: 'vocabulary-list', path: '/vocabularys/list', component: VocabularyList},
      {name: 'user-list', path: '/users/list', component: UserList},
      // {name: 'user-vip', path: '/users/vip', component: UserVip},
      // {name: 'dictionarys-edit', path: '/dictionarys/edit/:id', component: DictionaryEdit, props: true},
      // {name: 'dictionarys-creat', path: '/dictionarys/creat', component: DictionaryEdit},
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
