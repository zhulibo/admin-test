import layout from '@/layout/layout.vue'
import type {RouteRecordRaw} from "vue-router";

export const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    meta: {
      hidden: true,
    },
    redirect: { path: '/home/dashboard' },
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录页',
      hidden: true,
    },
    component: () => import('@/views/login/login.vue'),
  },
  {
    name: 'home',
    path: '/home',
    meta: {
      title: 'home'
    },
    component: layout,
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        meta: {
          title: 'dashboard'
        },
        component: () => import('@/views/dashboard/dashboard.vue'),
      }
    ]
  },
]
