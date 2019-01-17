import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import DemoIndex from '@/components/DemoIndex'
import TableComponent from '@/components/TableComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'TableComponent'}
    },
    {
      path: '/demoIndex',
      name: 'DemoIndex',
      component: DemoIndex
    },
    {
      path: '/tableComponent',
      name: 'TableComponent',
      component: TableComponent
    }
  ]
})
