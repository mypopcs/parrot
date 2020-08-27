<template>
  <div id="app">
    <router-view>

    </router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

//标记是组件
@Component({
})
//导出，从Vue继承App
export default class App extends Vue {}
</script>

<style>
body{ 
  margin: 0;
  padding: 0;
}
</style>
