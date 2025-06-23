export const menuRouter = [
  {
    name: 'entry',
    path: '/entry',
    component: () => import('@/views/entry')
  },
  {
    name: 'ranking',
    path: '/ranking',
    component: () => import('@/views/ranking')
  }
]
