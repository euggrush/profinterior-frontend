import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import {
  store
} from '../store/index.js'

import Home from '../views/Home.vue'
import GalleryRooms from '../components/Gallery/GalleryRooms.vue'
import ProjectSingle from '../components/ProjectSingle/ProjectSingle.vue'
import LoginForm from '../components/Forms/LoginForm.vue'
import AdminPanel from '../components/AdminPanel/AdminPanel.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    component: GalleryRooms
  },
  {
    path: '/gallery/:id',
    component: ProjectSingle
  },
  {
    path: '/login',
    component: LoginForm
  },
  {
    path: '/admin-panel',
    component: AdminPanel,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      residentAuth: false
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (store.state.token === ``) {
      next('/login')
    } else if (to.meta.adminAuth) {
      if (store.state.my_role === `admin`) {
        next()
      } else {
        next('/my-account')
      }
    } else if (to.meta.residentAuth) {
      if (store.state.my_role === `user`) {
        next()
      } else {
        next('/admin-panel')
      }
    }
  } else {
    next()
  }
})

export default router