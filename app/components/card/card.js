import injectStore from '_store/inject-store'
import { div, textArea, button, h4 } from '_core/virtual-dom'
import ifCond from '_components/conditionalRender/index'

export const card = (store) => {
    const { card } = store.getState()

    return div({ className: 'card'}, 
    ifCond(card.isEditable, editableCard(store), uneditableCard(store)))
}

const uneditableCard = (store) => {
    return div({
      className: 'card__card--uneditable'
    },
      div({ className: 'card__card-info',
            /* value: store.getState().value */} )
    )
  }

const editableCard = (store) => {
    return textArea({
      className: 'card__card--editable',
      value: store.getState().value,
      onchange({ target }) {
        store.dispatch({
          type: 'UPDATE_VALUE',
          value: target.value
        })
      }
    })
}

export default injectStore(card)