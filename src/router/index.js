import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  }
]

const officeRouter = [
  {
    path: '/office',
    component: Layout,
    redirect: '/office/add',
    name: 'office',
    meta: {
      title: '科室管理',
      icon: 'nested',
      roles: ['admin']
    },
    children: [
      {
        path: 'add',
        component: () => import('@/views/other/office/add/index'), // Parent router-view
        name: 'list',
        meta: { title: '科室录入' }
      },
      {
        path: 'list',
        component: () => import('@/views/other/office/list/index'),
        meta: { title: '科室列表' }
      }
    ]
  }
]

const drugRouter = [
  {
    path: '/drug',
    component: Layout,
    redirect: '/drug/add',
    name: 'drug',
    meta: {
      title: '药品管理',
      icon: 'nested',
      roles: ['admin']
    },
    children: [
      {
        path: 'add',
        component: () => import('@/views/other/medicine/add/index'), // Parent router-view
        name: 'list',
        meta: { title: '药品信息录入' }
      },
      {
        path: 'list',
        component: () => import('@/views/other/medicine/list/index'),
        meta: { title: '药品信息列表' }
      }
    ]
  }
]

const accountRouter = [
  {
    path: '/account',
    component: Layout,
    redirect: '/account/add',
    name: 'account',
    meta: {
      title: '账号管理',
      icon: 'example',
      roles: ['admin']
    },
    children: [
      {
        path: 'add',
        component: () => import('@/views/other/account/add/index'), // Parent router-view
        meta: { title: '账号添加' }
      },
      {
        path: 'list',
        component: () => import('@/views/other/account/list/index'),
        meta: { title: '用户列表' }
      }
    ]
  }
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  ...officeRouter,
  ...drugRouter,

  {
    path: '/case',
    component: Layout,
    redirect: '/case/add',
    name: 'case',
    meta: {
      title: '病案管理',
      icon: 'nested',
      roles: ['admin', 'doctor']
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/patient/case/list/index'),
        meta: { title: '病历汇总' }
      }
    ]
  },
  {
    path: '/appoint',
    component: Layout,
    redirect: '/appoint/book',
    name: 'appoint',
    meta: {
      title: '预约管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'book',
        component: () => import('@/views/patient/appoint/book/index'), // Parent router-view
        name: 'book',
        meta: { title: '预约挂号', roles: ['patient', 'admin'] }
      },
      {
        path: 'list',
        component: () => import('@/views/patient/appoint/list/index'),
        meta: { title: '看诊记录', roles: ['admin', 'patient', 'doctor'] }
      }
    ]
  },

  {
    path: '/doctor',
    component: Layout,
    redirect: '/doctor/plist',
    name: 'doctor',
    meta: {
      title: '医生信息管理',
      icon: 'form',
      roles: ['admin', 'doctor']
    },
    children: [
      {
        path: 'cureList',
        component: () => import('@/views/doctor/curelist/index'), // Parent router-view
        name: 'cure',
        meta: { title: '待看诊列表' }
      },
      {
        path: 'add',
        component: () => import('@/views/doctor/add/index'), // Parent router-view
        name: 'add',
        meta: { title: '看诊' },
        hidden: true
      },
      {
        path: 'dlist',
        name: 'Form',
        component: () => import('@/views/doctor/dlist'),
        meta: { title: '医生信息列表' }
      },
      {
        path: 'plist',
        name: 'Form',
        component: () => import('@/views/doctor/plist'),
        meta: { title: '患者信息列表'}
      },
      
    ]
  },
  {
    path: '/statistic',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'statistic',
        component: () => import('@/views/other/statistic/index'),
        meta: { title: '分类统计管理', icon: 'form', roles: ['admin', 'doctor'] }
      }
    ]
  },
  ...accountRouter,
  { path: '*', redirect: '/404', hidden: true }

]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
