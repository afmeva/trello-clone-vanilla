import { div, p, input, button, createRootNode } from './core/virtual-dom'
const withState = component => state => {
  const componentWithState = Object.assign({}, component, {
    update() {

    }
  })

  return componentWithState
}

const ribbon = (value, ...children) => (
  div({},
    p('beauty p' + value),
    p('text text text'),
    ...children
  )
)

const form = (state = {}) => {
  const { title, value } = state
  return div({ className: 'myDiv' },
    p('title'),
    button({
      className: 'mybutton',
      onclick: (e) => {
        console.log('clicking');

        model.do({
          type: 'UPDATE_VALUE',
          value: 3
        })
      }
    }, 'click me'),
    ribbon(1,
      ribbon(2),
      div({ className: 'lala' },
        div('lolazo'),
        div('lolazo' + title),
        ribbon(3)
      )
    )
  )
}

let reducers = {
  title: (action, state = 'default title') => {
    return state
  },
  value: (action, state = 0) => {
    switch (action.type) {
      case 'UPDATE_VALUE':
        return action.value
      default:
        return state
    }
  }
}

const createModel = reducers => {
  const listeners = []
  const state = {}
  return {
    actions: {},
    getState() {
      return state
    },
    do(action) {
      Object.entries(reducers).forEach(([key, reducer]) => {
        state[key] = reducer(action, state[key])
      })
      listeners.forEach(listener => listener(state))
    },
    onChange(callback) {
      listeners.push(callback)
    }
  }
}

const rootApp = (view, model) => {
  rootNode = createRootNode(view, document.body)
  model.onChange(rootNode.update)

  model.do({
    type: '@@INIT'
  })
}

const model = createModel(reducers)
rootApp(form, model)
