export default (action, state = { isEditable: true }) => {
    console.log('card reducer', state.isEditable)
    switch(action.type) {
        case 'SAVE_CARD':
        return Object.assign({}, state, {
            isEditable: false
        })
    }
    return state
  }