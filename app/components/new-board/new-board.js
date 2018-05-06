import { div, empty, button } from '_core/virtual-dom'
import injectStore from '_store/inject-store'
import ifCond from '_components/conditional-render/index'

const newBoard = (store) => {
  const { navigational } = store.getState()

  return div({ className: 'new-board' },
    button({
      className: 'new-board__btn',
      onclick() {
        store.dispatch({
          type: 'SHOW_CREATE_BOARD_POPUP'
        })
      }
    },
      'Create a new board...'
    ),
    ifCond(navigational.isCreateBoardVisible, div('pop up'), empty())
  )
}

export default injectStore(newBoard)

