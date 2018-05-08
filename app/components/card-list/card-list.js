import { div, button, h4 } from '_core/virtual-dom'
import injectStore from '_store/inject-store'
import card from '_components/card/card'

const cardList = (store) => {
  return div({ className: 'list' },
    /*listLabel(store), */
    div({ className: 'list__cards' },
      card(),
      button({
        className: 'list__add-button',
        onclick(e) {
          /* create an uneditable card with the 
           * value of list__card-text
           * create new textarea 
           */
          console.log(e)
          console.log(store.getState());
        }
      }, 'Add')
    )
  )
}

export default injectStore(cardList)