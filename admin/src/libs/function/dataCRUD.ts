export function getLink(name: string, rowData: any): string {
    const parl = name + '/' + rowData._id
    return parl
}

export function dataTreat(rowData: any):any {
    // 删除$index
    const dataBag = JSON.parse(JSON.stringify(rowData))
    return dataBag
}

//调用公共fetch获取数据
export async function fetchData(that: any, name: string, pageQuery?: any){
    try {
        const res = await that.$http.get(name,{
            params: {
                query: pageQuery
            }
        })
        that.page.total = res.data.total
        that.data = res.data
        return that.page.total, that.data
    } catch (e) {
        that.$message.error('获取数据失败' + e);
    }
}

//切换页数
export async function pageConfig(that:any, page: any){
    that.query.page = page.currentPage
    that.query.limit = page.pageSize
    return page.currentPage, page.pageSize
}
// 排序
export async function sortConfig(that:any, srotValue: any){
    // console.log(shrotValue)
    const order = srotValue.order
    const prop = srotValue.prop
    if(!order){
        that.query.short = null
    } else {
        that.query.short = {
            [prop]: order === 'ascending' ? 1 : -1
        }
    }
}

//调用公共fetch获取option
export async function fetchOption(that: any, name: string){
    const link = name + '/option'
    try {
        const res = await that.$http.get(link)
        return that.option = res.data
    } catch (e) {
        that.$message.error('获取配置失败' + e);
    }
}

//创建
export async function createData(that: any, rowLine: any, name: string, done: any, loading: boolean){
    try {
        await that.$http.post(name, rowLine);
        that.$message.success('创建成功');
    } catch (e) {
        that.$message.error('创建失败' + e);
    }
    done()
    fetchData(that, name)
}
//更新
export async function updateData(that: any, name: string, rowLine: any, index: any, done: any, loading: boolean){
    const link = getLink(name, rowLine)
    const data = dataTreat(rowLine)
    delete data.$index
    try {
        await that.$http.put(link, data);
    } catch (e) {
        that.$message.error('更新失败：' + e);
        return
    }
    that.$message.success('更新成功');
    done()
    fetchData(that, name)
}

//删除
export async function removeRow(that: any, name: string, rowLine: any){
    const link = getLink(name, rowLine)
    await that.$confirm('是否确认删除？');
    try {
        await that.$http.delete(link);
        that.$message.success('删除成功');
    } catch (e) {
        that.$message.error('删除失败' + e);
    }
    fetchData(that, name)
}