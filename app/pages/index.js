import { div, p, input, button } from '_core/virtual-dom'
import newBoardBtn from '_components/new-board/new-board'
import cardList from "_components/card-list/card-list"
export default () => {
  return div({},
    newBoardBtn(),
    cardList()
  )
}