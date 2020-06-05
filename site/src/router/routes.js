import store from '../store'

function requireAuth (to, from, next) {
  if (!store().state.auth.isUserLogged) {
    next({ name: 'welcome' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    beforeEnter: requireAuth,
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/auth/index.vue') },
      { path: 'store', name: 'store', component: () => import('pages/auth/store.vue') },
      { path: 'profile', name: 'profile', component: () => import('pages/auth/profile.vue') },
      { path: 'profile/:id', component: () => import('pages/auth/profile-friend.vue') },
      { path: 'reading', name: 'reading', component: () => import('pages/auth/theme-filter.vue') },
      { path: 'quiz', name: 'quiz', component: () => import('pages/auth/theme-filter.vue') },
      { path: 'listening', name: 'listening', component: () => import('pages/auth/theme-filter.vue') },
      { path: 'complete', name: 'complete', component: () => import('pages/auth/theme-filter.vue') },
      { path: 'hub', name: 'hub', component: () => import('pages/auth/hub.vue') },
      { path: 'settings', name: 'settings', component: () => import('pages/auth/settings.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/withoutHeader.vue'),
    children: [
      { path: 'welcome', name: 'welcome', component: () => import('pages/Welcome.vue') },
      { path: 'access', name: 'access', component: () => import('pages/access.vue') },
      { path: 'login', name: 'login', component: () => import('pages/login.vue') },
      { path: 'forgot', name: 'forgot-password', component: () => import('pages/forgot.vue') },
      { path: 'reset', name: 'reset-password', component: () => import('pages/reset.vue') },
      { path: 'without-internet', name: 'without-internet', component: () => import('pages/without-internet') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
