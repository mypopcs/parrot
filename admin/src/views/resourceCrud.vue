<template>
  <div>
      <avue-crud
        v-if="option.column"
        :option="option"
        :data="data.data"
        @row-save="create"
        @row-del="remove"
        @row-update="update"
      ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator'
import {removeRow, createData, fetchData, fetchOption, updateData } from '../libs/function/dataCRUD'

// const this.resource = '';
@Component({})
export default class ResourceList extends Vue {
  //路由传参,数据库增删改查用到的路径关键字
  @Prop(String) resource:string = 'users'
  
  //定义数据
  data = {};

  option = {};

  //创建
  async create(row: any, done: any, loading: any){
    await createData(this, row, this.resource, done, loading)
  }
  //更新
  async update(row: any, index: any, done: any, loading: any){
    await updateData(this, this.resource, row, index, done, loading)
  }
  //调用公共获取删除
  async remove(row: any){
    await removeRow(this, this.resource, row)
  }
  // 执行获取
  async created(){
    console.log(this.resource)
    await fetchOption(this, this.resource);
    await fetchData(this, this.resource);
  }
}
</script>

<style>

</style>