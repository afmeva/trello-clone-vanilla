import '_core/firebase.config'
import { createApp } from '_core/virtual-dom'
import { div } from '_core/virtual-dom'
import { router, route } from '_components/router/router'
import indexPage from '_pages/index/index'
import boardPage from '_pages/board/board'
import store from '_store/store'

const view = () => {
  return router(
    route({
      route: 'index.html',
      component: indexPage()
    }),
    route({
      route: 'board/:boardId',
      component: boardPage()
    })
  )
}

const app = createApp({
  view,
  rootNode: document.querySelector('.app')
})
app.render()
store.onChange(app.render)
