import routerReducer from '_components/router/reducer'
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
  router: routerReducer
}

export default composeReducers(obj)

