import { createRouter, createWebHistory } from 'vue-router'
import AboutRayno from '@/views/AboutRayno.vue'
import Skills from '@/views/Skills.vue'
import Portfolio from '@/views/portfolio/index.vue'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import SendEmail from '@/views/SendEmail.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        a: Home
      }
    },
    {
      path: '/portfolio',
      components: {
        a: Portfolio
      },
      children: [
        {
          path: '/portfolio/rayno',
          name: 'rayno',
          components: {
            b: AboutRayno
          }
        },
        {
          path: '/portfolio/skills',
          name: 'skills',
          components: {
            b: Skills
          }
        },
        {
          path: '/portfolio/projects',
          name: 'projects',
          components: {
            b: Projects
          }
        },
        {
          path: '/portfolio/send-email',
          name: 'send-email',
          components: {
            b: SendEmail
          }
        },
      ]
    },

  ]
})

export default router
