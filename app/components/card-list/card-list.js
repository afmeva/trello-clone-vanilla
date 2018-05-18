import { div, button, h4 } from '_core/virtual-dom'
import injectStore from '_store/inject-store'
import card from '_components/card/card'

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
          payload: {isEditable: true, value: ''}
        })
      }
    }, 'Add')
  )
}

const createCards = (cards = []) => {
  return cards.map(cardObj => card(cardObj))
}

export default injectStore(cardList)