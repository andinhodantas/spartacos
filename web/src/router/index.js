import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import { checkToken, validarToken } from '../../autenticacao'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/cadastrarConta',
      name: 'cadastrarConta',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CadastrarConta.vue')
    },
    {
      path: '/paginaInicial',
      name: 'paginaInicial',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PaginaInicial.vue')
    },
    {
      path: '/cadastrarTreino',
      name: 'cadastrarTreino',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CadastrarTreino.vue')
    },
    {
      path: '/cadastrarExercicio',
      name: 'cadastrarExercicio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CadastrarExercicio.vue')
    },
    {
      path: '/treino',
      name: 'treino',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Treino.vue')
    }
  ]
})

// toda vez que alguem tentar acessar uma rota
// essa funcao será executada e se o nosso token for valido, agente deixa a pessoa passar
// se não a pessoa será direconada para a tela de login
router.beforeEach(async (to, from, next) => {
  if (to.meta.auth) {
    
    if (checkToken()) {
      const validar = await validarToken(checkToken())
      if (validar) {
        next()
      }
      else {
        next({name: "login"})
      }
      
    }
    else {
      next({name: "login"})
    }
  }

  else {
    next()
  }
})

export default router
