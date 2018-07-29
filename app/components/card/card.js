import injectStore from '_store/inject-store'
import { div, textArea, button, h4,p } from '_core/virtual-dom'
import ifCond from '_components/conditionalRender/index'

export const uneditableCard = (card) => {
  return div({
    className: 'card__card--uneditable'
  },
    div({
      className: 'card__card-info'
    },
      p(card.value)
    )
  )
}

export const editableCard = (store) => {
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