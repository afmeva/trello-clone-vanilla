import routerReducer from '_components/router/reducer'
import newBoardReducer from '_components/new-board/reducer'
import newBoardsPopupReducer from '_components/new-board-popup/new-board-popup-reducer'
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
  router: routerReducer,
  navigational: newBoardReducer,
  newBoardsPopup: newBoardsPopupReducer
}

export default composeReducers(obj)

