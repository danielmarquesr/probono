import Vue from 'vue';
import VueRouter from 'vue-router';

// VIEWS
import Home from '@/views/Home';
import IndexTranslation from '@/views/IndexTranslation';
import ShowTranslation from '@/views/ShowTranslation';
import IndexLawsuit from '@/views/IndexLawsuit';
import Login from '@/views/Login';
import Register from '@/views/Register';
import IndexProgress from '@/views/IndexProgress';
import ShowProgress from '@/views/ShowProgress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'regras-traducao',
        name: 'IndexTranslation',
        component: IndexTranslation,
      },
      {
        path: 'regras-traducao/:translationId/processos',
        name: 'ShowTranslation',
        component: ShowTranslation,
      },
      {
        path: 'processos',
        name: 'IndexLawsuit',
        component: IndexLawsuit,
      },
      {
        path: 'processos/:lawsuitId/andamentos',
        name: 'IndexProgress',
        component: IndexProgress
      },
      {
        path: 'processos/:lawsuitId/andamentos/:progressId',
        name: 'ShowProgress',
        component: ShowProgress
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: (route) => ({ query: route.query.q })
  },
  {
    path: '/registrar',
    name: 'Register',
    component: Register,
    props: { type: 'client' }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
