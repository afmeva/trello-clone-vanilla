import { div, button, h4 } from '_core/virtual-dom'
import injectStore from '_store/inject-store'
import {uneditableCard, editableCard} from '_components/card/card'

const cardList = (store) => {
  return div({ className: 'list' },
    div({ className: 'list__cards' }),
      ...createCards(store),
    button({
      className: 'list__add-button',
      onclick(e) {
        store.dispatch({
          type: 'ADD_NEW_CARD',
          payload: { isEditable: true, value: '' }
        })
      }
    }, 'Add')
  )
}

const createCards = (store) => {
  let { cardList: { cards } } = store.getState()
  return cards.map(card => card.isEditable ? editableCard(store) : uneditableCard(card))
}

export default injectStore(cardList)