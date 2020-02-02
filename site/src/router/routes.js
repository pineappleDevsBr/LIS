
const routes = [
  {
    path: '/',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/index.vue') }
    ]
  },
  {
    path: '/store',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', name: 'store', component: () => import('pages/store.vue') }
    ]
  },
  {
    path: '/profile',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', name: 'profile', component: () => import('pages/profile.vue') }
    ]
  },
  {
    path: '/profile/:id',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', component: () => import('pages/internal-pages/profile-friend.vue') }
    ]
  },
  {
    path: '/settings',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', name: 'settings', component: () => import('pages/internal-pages/settings.vue') }
    ]
  },
  {
    path: '/reading',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', name: 'reading', component: () => import('pages/activities/reading.vue') }
    ]
  },
  {
    path: '/hub',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', name: 'hub', component: () => import('pages/hub.vue') }
    ]
  },
  {
    path: '/welcome',
    component: () => import('layouts/withoutHeader.vue'),
    children: [
      { path: '', name: 'welcome', component: () => import('pages/Welcome.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/withoutHeader.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/login.vue') }
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
