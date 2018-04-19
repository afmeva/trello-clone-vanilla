import { div, p, input, button } from '_core/virtual-dom'
import withStore from '_store/withStore'
import ifCond from '_components/conditionalRender/index'

export default withStore((store) => {
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
    ifCond(navigational.isCreateBoardVisible, div('pop up'), null)
  )
})
