<template>
  <el-container>
      <el-aside width="200px">
          <!-- Aside content -->
          <!-- 添加一个router表示是路由菜单 -->
          <el-menu mode="vertical" class="contain-full-height" :default-active="$router.path" router>
              <!--循环菜单，在menu数组里面获取-->
              <el-submenu v-for="(item, index) in menu.items"
                  :index="`menu-item-${index}`"
                  :key="`{menu-item-${index}`">
                  <!-- 页面显示title为item的title -->
                  <template slot="title">{{item.title}}</template>
                  <!-- 每一个v-for都要有一个key, 取一个不冲突的key值 -->
                  <!-- el-menu-item的index决定了跳转路由 -->
                  <el-menu-item
                  v-for="(subItem, subIndex) in item.items"
                  :key="`menu-item-${index}--${subIndex}`"
                      :index="subItem.path">
                          {{subItem.title}}
                  </el-menu-item>
              </el-submenu>
          </el-menu>
          
      </el-aside>
      <el-container>
          <el-header>
              <!-- Header content -->
              <h1>Parrot词典</h1>
          </el-header>
          <el-main>
              <!-- Main content -->
              <router-view :key="$route.path"></router-view>
          </el-main>
      </el-container>
  </el-container>
  
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

//引入一个json来管理菜单
let Menu = require('../libs/menu')

//标注为组件
@Component({})
export default class Main extends Vue {
    //在此定义属性和方法
    //将对象赋予menu
    menu = Menu
}
</script>

<style>
 .contain-full-height {
   height: 100vh;
 }
</style>