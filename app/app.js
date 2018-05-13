import '_core/firebase.config'
import { createApp } from '_core/virtual-dom'
import { div } from '_core/virtual-dom'
import { router, route } from '_components/router/router'
import index from '_pages/index/index'
import store from '_store/store'

const view = () => {
  return router(
    route({
      route: 'index.html',
      component: index()
    })
  )
}

const app = createApp({
  view,
  rootNode: document.querySelector('.app')
})
app.render()
store.onChange(app.render)
