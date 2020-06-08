import Vue from 'vue';
import VueRouter from 'vue-router';
import userAPI from '@/api/user';

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
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'regras-traducao',
        name: 'IndexTranslation',
        component: IndexTranslation,
        meta: {
          requiresAuth: true,
          isLawyer: true
        }
      },
      {
        path: 'regras-traducao/:translationId/processos',
        name: 'ShowTranslation',
        component: ShowTranslation,
        meta: {
          requiresAuth: true,
          isLawyer: true
        }
      },
      {
        path: 'processos',
        name: 'IndexLawsuit',
        component: IndexLawsuit,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'processos/:lawsuitId/andamentos',
        name: 'IndexProgress',
        component: IndexProgress,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'processos/:lawsuitId/andamentos/:progressId',
        name: 'ShowProgress',
        component: ShowProgress,
        meta: {
          requiresAuth: true
        },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        name: 'Login',
      })
    } else {
      if (to.matched.some(record => record.meta.isLawyer)) {
        if(localStorage.getItem('role') == 'lawyer') {
          next()
        }
        else {
          next({ name: 'IndexLawsuit' });
        }
      } else if (to.matched.some(record => record.meta.isClient)) {
        if(localStorage.getItem('role') == 'client') {
          next()
        }
        else {
          next({ name: 'IndexLawsuit' });
        }
      } else { next() }
    }
  } else { next() }
});

export default router;
