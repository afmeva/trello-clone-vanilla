import routerReducer from '_components/router/reducer'
import newBoardReducer from '_components/new-board/reducer'
import { composeReducers } from '_core/model'
import cardListReducer from '_components/card-list/reducer'

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
  router: routerReducer,
  navigational: newBoardReducer,
  cardList: cardListReducer
}

export default composeReducers(obj)

