import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import GalleryRooms from '../components/Gallery/GalleryRooms.vue'
import ProjectSingle from '../components/ProjectSingle/ProjectSingle.vue'

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
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router