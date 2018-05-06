import { div, p } from '_core/virtual-dom'
import newBoardBtn from '_components/new-board/new-board'
import newBoardPopup from '_components/new-board-popup/new-board-popup'
import boardBtn from '_components/board-btn/board-btn'
import injectStore from '_store/inject-store'


const boards = [
    {
    name: 'tablero1',
    url: 'tablero1'
  },
  {
    name: 'tablero2',
    url: 'tablero2'
  }
]

const createBoards = (boards = []) => {
  return boards.map(board => boardBtn(board))
}

export default injectStore((state) => {
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