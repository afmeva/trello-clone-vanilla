import { div, p, input, button } from '_core/virtual-dom'
import newBoardBtn from '_components/new-board/new-board'

export default () => {
  return div({
      className: 'index-page'
    },
    newBoardBtn(),
  )
}