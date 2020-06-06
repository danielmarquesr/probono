import Vue from 'vue';
import VueRouter from 'vue-router';

// VIEWS
import Home from '@/views/Home';
import Lawsuit from '@/views/Lawsuit';
import Client from '@/views/Client';
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
        path: 'processos',
        name: 'Lawsuit',
        component: Lawsuit,
        // children: [
        //   {
        //     path: ':lawsuitId/andamentos',
        //     name: 'Progress',
        //     component: Progress
        //   }
        // ]
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
