import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    redirect: '/echartsDemo/index'
  },
  {
    path: '/echartsDemo/index',
    name: 'EchartsDemo',
    component: () => import(/* webpackChunkName:"echartsDemo" */ '../views/echartsDemo'),
    meta: { title: 'Echarts示例管理' }
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export default createRouter()
