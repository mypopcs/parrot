<template>
  <div>
      <avue-crud
        v-if="option.column"
        :option="option"
        :data="data.data"
        :page.sync="page"
        @row-save="create"
        @row-del="remove"
        @row-update="update"
        @on-load="changePage"
        @sort-change="changeSort"
        @search-change="changeSearch"
      ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator'
import {removeRow, createData, fetchData, fetchOption, updateData, pageConfig, sortConfig, searchValue } from '../libs/function/dataCRUD'

// const this.resource = '';
@Component({})
export default class ResourceList extends Vue {
  //路由传参,数据库增删改查用到的路径关键字
  @Prop(String) resource !: string
  
  //定义数据
  data = {};

  option = {};
  
  page = {
    pageSize: 10,
    pageSizes: [10, 30, 50, 100],
    total: 0
  };
  query ={
    limit: 10
  }
  shrot = {
    
  }
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
    await fetchData(this, this.resource, this.query);
  }
  // 获取分页配置
  async changePage(){
    await pageConfig(this, this.page);
    await fetchData(this, this.resource, this.query);
  }
  //排序
  async changeSort(val: any){
    // console.log(val)
    await sortConfig(this, val);
    await fetchData(this, this.resource, this.query);
  }
  //搜索
  async changeSearch(where: String, done: any){
    await searchValue(this, where, done);
    await fetchData(this, this.resource, this.query);
  }
}
</script>

<style>

</style>