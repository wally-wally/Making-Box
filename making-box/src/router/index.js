import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'MainPage',
      component: () => import('@/views/MainPage.vue')
    },
    {
      path: '/inputname',
      name: 'InputNamePage',
      component: () => import('@/views/InputNamePage.vue')
    },
    {
      path: '/box',
      component: () => import('@/views/BoxPage.vue'),
      children: [
        { path: 'choice', name: 'SelectBoxType', component: () => import('@/components/BoxShape/SelectBoxType.vue') },
        { path: 'name', name: 'BoxName', component: () => import('@/components/BoxShape/BoxName.vue') },
      ]
    },
    {
      path: '/tool',
      name: 'ToolPage',
      component: () => import('@/views/ToolPage.vue')
    },
    {
      path: '/size',
      name: 'SizePage',
      component: () => import('@/views/SizePage.vue')
    },
  ]
})