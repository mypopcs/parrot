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
import { Vue, Component} from 'vue-property-decorator'
import {removeRow, createData, fetchData, fetchOption, updateData } from '../../libs/function/dataCRUD'


//数据库增删改查用到的路径关键字
const name = 'users'

@Component({})
export default class UserList extends Vue {
  //定义数据
  data = {};

  option = {};

  //创建
  async create(row: any, done: any, loading: any){
    await createData(this, row, name, done, loading)
  }
  //更新
  async update(row: any, index: any, done: any, loading: any){
    await updateData(this, name, row, index, done, loading)
  }
  //调用公共获取删除
  async remove(row: any){
    await removeRow(this, name, row)
  }
  // 执行获取
  async created(){
    await fetchOption(this, name);
    await fetchData(this, name);
  }
}
</script>

<style>

</style>