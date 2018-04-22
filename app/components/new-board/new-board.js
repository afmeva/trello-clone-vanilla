import { div, empty, button } from '_core/virtual-dom'
import withStore from '_store/withStore'
import ifCond from '_components/conditionalRender/index'

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

export default withStore(newBoard)

