import { composeReducers } from '_core/model'

const obj = {
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
  },
  router: (action, state) => {
    console.log(action, state)
    switch (action.type) {
      case 'URL_CHANGED':
        console.log('url linda cmabiando')
        return state
    }
    return state
  }
}

export default composeReducers(obj)

