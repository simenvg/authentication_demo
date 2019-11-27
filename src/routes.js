import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

export const routes = [
  {path: '', component: Home },
  {path: '/register', component: Register },
  {path: '/login', component: Login },
  {path: '/dashboard', component: Dashboard },

];