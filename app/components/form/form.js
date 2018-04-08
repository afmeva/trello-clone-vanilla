import { div, p, input, button } from '_core/virtual-dom'

const form = (store) => {
  const { title, value = 0 } = store.getState()
  return div({ className: 'myDiv' },
    input({
      value: store.getState().value,
      onchange({ target }) {
        store.dispatch({
          type: 'UPDATE_VALUE',
          value: Number(target.value) + 1
        })
      }
    }),
    div('my current number:' + store.getState().value),
    button({
      onclick() {
        store.dispatch({
          type: 'UPDATE_VALUE',
          value: store.getState().value + 1
        })
      }
    }, 'Click me')
  )
}

export default form