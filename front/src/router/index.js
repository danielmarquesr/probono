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

const verifyRole = async (userRole) => {
  let user = {};
  userAPI.getUserInfo()
    .then(async res => {
      user = await res.data;
      return user && user.role === userRole
    })
    .catch(() => {
      return false;
    });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      if (to.matched.some(record => record.meta.isLawyer)) {
        await verifyRole('lawyer') ? next() : next({ path: '/processos' });
      } else if (to.matched.some(record => record.meta.isClient)) {
        await verifyRole('client') ? next() : next({ path: '/processos' });
      } else { next() }
    }
  } else { next() }
});

export default router;
