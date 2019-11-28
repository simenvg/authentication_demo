import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import store from './store.js'

export const routes = [
  {
    path: '', 
    component: Home, 
    name: "home" },
  {
    path: '/register', 
    component: Register, 
    name: "register" },
  {
    path: '/login', 
    component: Login, 
    name: "login" },
  {
    path: '/dashboard', 
    component: Dashboard, 
    name: "dashboard",
    beforeEnter: (to, from, next) => {
      if (store.getters.user.loggedId) next('/') //???
      else next()
    } 
  },

];