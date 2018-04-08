import { createApp } from '_core/virtual-dom'

import view from '_components/form/form'
// import createStore from './store/store'
import store from './store/store'

const app = createApp({
  store,
  view,
  rootNode: document.querySelector('.app')
})
app.render()
store.onChange(app.render)
