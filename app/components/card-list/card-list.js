import { div, button, h4 } from '_core/virtual-dom'
import injectStore from '_store/inject-store'

const cardList = (store) => {
  
  let { cardList } = store.getState()

  return div({ className: 'list' },
    /*listLabel(store), */
    div({ className: 'list__cards' },
      ...createCards(cardList.cards)),
    button({
      className: 'list__add-button',
      onclick(e) {
        store.dispatch({
          type: 'ADD_NEW_CARD',
          payload: 'new card placeholder' //TODO: this should be a card
        })
      }
    }, 'Add')
  )
}

const createCards = (cards = []) => {
  return cards.map(card => div(card))
}

export default injectStore(cardList)