// 对外暴露路由(常量路由)
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/Index.vue'),
    name: 'login', // 命名路由
    meta: {
      title: '登录',
      hidden: true,
      icon: 'Promotion', // 菜单文字左侧的图标, 支持element-plus的全部图标
    },
  },
  {
    // 登录成功以后展示数据的路由
    path: '/',
    component: () => import('@/layout/Index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/survey/Survey.vue'),
        meta: {
          title: '总览',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/home/userProfile',
        component: () => import('@/views/home/user-profile/UserProfile.vue'),
        meta: {
          title: '用户资料',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
    meta: {
      title: '主页',
      hidden: false,
      icon: 'HomeFilled',
    },
  },
  {
    path: '/aibi',
    component: () => import('@/layout/Index.vue'),
    redirect: '/aibi',
    children: [
      {
        path: '/aibi',
        component: () => import('@/views/ai-bi/AIBI.vue'),
        meta: {
          title: '智能分析',
          hidden: false,
          icon: 'PieChart',
        },
      },
    ],
    meta: {
      title: '智能分析',
      hidden: false,
      icon: 'HomeFilled',
    },
  },
  {
    path: '/mychart',
    component: () => import('@/layout/Index.vue'),
    redirect: '/mychart',
    meta: {
      title: '图表管理',
      hidden: false,
      icon: 'MessageBox',
    },
    children: [
      {
        path: '/mychart',
        component: () => import('@/views/my-chart/MyChart.vue'),
        meta: {
          title: '我的图表',
          hidden: false,
          icon: 'MessageBox',
        },
      },
    ],
  },
  {
    path: '/screen',
    component: () => import('@/views/my-chart/MyChart.vue'),
    meta: {
      title: '数据化大屏',
      hidden: false,
      icon: 'PictureRounded',
    },
  },
  {
    path: '/screenAI',
    component: () => import('@/views/my-chart/MyChart.vue'),
    meta: {
      title: '智能化大屏',
      hidden: false,
      icon: 'Cpu',
    },
  },
  {
    path: '/404',
    component: () => import('@/views/404/Index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
      icon: 'ChatDotSquare',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: '任意路由',
      hidden: true,
      icon: 'Bill',
    },
  },
]
