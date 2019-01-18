import Vue from 'vue'
import Router from 'vue-router'
import AddRowComponent from '@/components/AddRowComponent'
import TableComponent from '@/components/TableComponent'

Vue.use(Router)

export default new Router({

  // 使用“命名视图”配置方式（更优）
  routes: [
    {
      path: '/',
      components: {
        default: TableComponent,
        table: TableComponent,
        addRow: AddRowComponent
      }
    }]

  // 使用“编程式的导航”router.push配置方式
  // routes: [
  //   {
  //     path: '/',
  //     redirect: {name: 'TableComponent'}
  //   },
  //   {
  //     path: '/addRowComponent',
  //     name: 'AddRowComponent',
  //     component: AddRowComponent
  //   },
  //   {
  //     path: '/tableComponent',
  //     name: 'TableComponent',
  //     component: TableComponent
  //   }
  // ]
})
