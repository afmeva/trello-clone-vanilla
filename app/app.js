import { createModel } from './core/model'
import { createApp } from './core/virtual-dom'

import form from './components/form/form'
import store from './store/store'

const app = createApp(form, document.querySelector('.app'))
app.render(store.getState())

store.onChange(app.render)
