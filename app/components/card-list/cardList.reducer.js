export default (action, state = { listLabel: '', cards: [], hasEditable: false }) => {
  switch (action.type) {
    case 'ADD_NEW_CARD':
      return Object.assign({}, state, {
        cards: [...state.cards, action.payload],
        hasEditable: true
      })
    case 'SAVE_CARD':
      return Object.assign({}, state, {
        cards: [...state.cards, action.payload],
        hasEditable: false
      })
  }
  return state
}