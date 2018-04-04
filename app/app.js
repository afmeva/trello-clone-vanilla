import { createModel } from './core/model'
import { createRootNode } from './core/virtual-dom'

import form from './components/form/form'
import store from './store/store'

const rootApp = (view, model) => {
  rootNode = createRootNode(view, document.querySelector('.app'))
  model.onChange(rootNode.render)

  model.do({
    type: '@@INIT'
  })
}

rootApp(form, store)
