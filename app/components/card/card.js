import injectStore from '_store/inject-store'
import { div, textArea, p, button } from '_core/virtual-dom'

export const uneditableCard = (card) => {
  return div({
    className: 'card__card card__card--uneditable'
  },
    div({
      className: 'card__card-info'
    },
      p(card.value)
    )
  )
}

export const editableCard = (store) => {
  return div({ className: 'card__card card__card--editable' },
    textArea({
      className: 'card__card-input',
      value: store.getState().value,
      onchange({ target }) {
        store.dispatch({
          type: 'UPDATE_VALUE',
          value: target.value
        })
      }
    })
  )
}

export default injectStore(card)