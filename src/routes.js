import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

export const routes = [
  {path: '', component: Home, name: "home" },
  {path: '/register', component: Register, name: "register" },
  {path: '/login', component: Login, name: "login" },
  {path: '/dashboard', component: Dashboard, name: "dashboard" },

];