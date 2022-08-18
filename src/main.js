import './styles/global.scss'
import Router from './Router.svelte'

const router = new Router({
  target: document.getElementById('app')
})

export default router
