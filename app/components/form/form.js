import { div, p, input, button } from '../../core/virtual-dom'

import store from '../../store/store'

export default (state = {}) => {
  const { title, value = 0 } = state
  return div({ className: 'myDiv' },
    input({
      value: store.getState().value,
      onchange({ target }) {
        store.do({
          type: 'UPDATE_VALUE',
          value: Number(target.value) + 1
        })
      }
    }),
    div('my current number:' + store.getState().value),
    button({
      onclick() {
        store.do({
          type: 'UPDATE_VALUE',
          value: store.getState().value + 1
        })
      }
    }, 'Click me')
  )
}