import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AddRowComponent from '@/components/AddRowComponent'
import TableComponent from '@/components/TableComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'TableComponent'}
    },
    {
      path: '/addRowComponent',
      name: 'AddRowComponent',
      component: AddRowComponent
    },
    {
      path: '/tableComponent',
      name: 'TableComponent',
      component: TableComponent
    }
  ]
})
