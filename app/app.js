import '_core/firebase.config'
import { createApp } from '_core/virtual-dom'
import { div } from '_core/virtual-dom'
import { router, link, route } from '_components/router/router'
import form from '_components/form/form'
import store from '_store/store'


const view = () => {
  return router(
    route({
      route: 'about.html',
      component: form
    }),
    route({
      route: 'index.html',
      component: div({},
        div({}, 'Hello meet the index!'),
        link({
          route: 'about.html',
          text: 'I am a fucking link'
        })
      )
    })
  )
}

const app = createApp({
  view,
  rootNode: document.querySelector('.app')
})
app.render()
store.onChange(app.render)
