import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  proxy: {
    '/api': {
      'target': 'http://127.0.0.1:7001/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '/api' },
    },
  },
  initialState: {},
  request: {},
  publicPath: '/public/umi/',
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      name: '桌面',
      path: '/index',
      component: './Poker',
      // 不展示顶栏
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
      // 不展示菜单顶栏
      menuHeaderRender: false,
      // 隐藏子菜单
      hideChildrenInMenu: true,
      // 隐藏自己和子菜单
      hideInMenu: true,
      // 在面包屑中隐藏
      hideInBreadcrumb: true,
    },
    // {
    //   name: '首页',
    //   path: '/home',
    //   component: './Home',
    // },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    // {
    //     name: ' CRUD 示例',
    //     path: '/table',
    //     component: './Table',
    // },
  ],
  npmClient: 'pnpm',
});
