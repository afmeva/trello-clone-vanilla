import { div, p } from '_core/virtual-dom'
import newBoardBtn from '_components/new-board/new-board'
import newBoardPopup from '_components/new-board-popup/new-board-popup'
import boardBtn from '_components/board-btn/board-btn'
import injectStore from '_store/inject-store'

const createBoards = (boards = []) => {
  return boards.map(board => boardBtn(board))
}

export default injectStore((store) => {
  const state = store.getState()
  const { newBoardsPopup: { boards }} = state;
  return div({
      className: 'index-page'
    },
    p('Tableros Personales'),
    div({
        className: 'index-page__boards'
      },
      ...createBoards(boards),
      newBoardBtn(),
    ),
    newBoardPopup()
  )
})