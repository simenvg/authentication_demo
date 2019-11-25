import HelloWorld from './components/HelloWorld'
import Register from './components/Register'
import Login from './components/Login'

export const routes = [
  {path: '', component: HelloWorld },
  {path: '/register', component: Register },
  {path: '/login', component: Login },

];