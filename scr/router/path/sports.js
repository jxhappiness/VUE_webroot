import sports from '@page/sports'
import noviceTutorial from '@page/sports/noviceTutorial'

const routes = [
  {
    path: '/sports',
    name: 'sports',
    meta: {
      title: '体育赛事'
    },
    component: sports
  },
  {
    path: '/noviceTutorial',
    name: 'noviceTutorial',
    meta: {
      title: ' 新手教程'
    },
    component: noviceTutorial,
  }
];

export default routes
