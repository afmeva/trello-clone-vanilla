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
  const { title, value = 0 } = state
  return div({ className: 'myDiv' },
    input({
      value: model.getState().value,
      onchange({ target }) {
        model.do({
          type: 'UPDATE_VALUE',
          value: Number(target.value) + 1
        })
      }
    }),
    div('my current number:' + model.getState().value),
    button({
      onclick() {
        model.do({
          type: 'UPDATE_VALUE',
          value: model.getState().value + 1
        })
      }
    }, 'Click me')
  )
}

let reducers = {
  title: (action, state = 'default title') => {
    return state
  },
  value: (action, state = 25) => {
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
  rootNode = createRootNode(view, document.querySelector('.app'))
  model.onChange(rootNode.update)

  model.do({
    type: '@@INIT'
  })
}

const model = createModel(reducers)
rootApp(form, model)
