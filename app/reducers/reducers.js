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
  }
}

export default composeReducers(obj)

