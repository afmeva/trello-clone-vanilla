import { div, empty, p, input, button } from '_core/virtual-dom'
import injectStore from '_store/inject-store'

export default injectStore((store) => {
  const state = store.getState();
  const { navigational: { isCreateBoardVisible } } = state;

  if (isCreateBoardVisible) {
    return div({
        className: 'new-board-popup'
      },
      div({
          className: 'new-board-popup__box'
        },
        p('Añadir titulo de tablero'),
        input({
          onchange({ target: { value } }) {
            store.dispatch({
              type: 'UPDATE_NEWBOARD_POPUP_VALUE',
              value
            })
          }
        }),
        button({
          onclick() {
            store.dispatch({
              type: 'CREATE_NEWBOARD'
            })
          }
          },
          'Crear tablero'
        )
      )
    )
  }

  return empty();
})