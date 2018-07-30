import { div, button, h4 } from '_core/virtual-dom'
import {uneditableCard, editableCard} from '_components/card/card'
import injectStore from '_store/inject-store'
import ifCond from '_components/conditionalRender/index'

const cardList = (store) => {
  const {  cardList: { hasEditable } } = store.getState()
  console.log('haseditable', hasEditable)
  return div({ className: 'list' },
    div({ className: 'list__cards' },
      ...createCards(store),
    ),
    ifCond(
      hasEditable,
      button({
        className: 'list__add-card',
        onclick(e) {
          const { value } = store.getState()
          store.dispatch({
            type: 'SAVE_CARD',
            payload: { isEditable: false, value: value }
          })
        }
      }, 'Add Card'),
      button({
        className: 'list__add-another-card',
        onclick(e) {
          store.dispatch({
            type: 'ADD_NEW_CARD',
            payload: { isEditable: true, value: '' }
          })
        }
      }, '+ Add another card')
    )
  )
}

const createCards = (store) => {
  let { cardList: { cards } } = store.getState()
  return cards.map(card => card.isEditable ? editableCard(store) : uneditableCard(card))
}

export default injectStore(cardList)