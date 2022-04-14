import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import GalleryRooms from '../components/Gallery/GalleryRooms.vue'
import ProjectSingle from '../components/ProjectSingle/ProjectSingle.vue'
import Upload from '../components/ProjectSingle/Upload.vue'
import LoginForm from '../components/Forms/LoginForm.vue'

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
    path: '/upload',
    component: Upload
  },
  {
    path: '/login',
    component: LoginForm
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router