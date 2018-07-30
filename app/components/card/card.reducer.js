export default (action, state = { isEditable: true }) => {
    switch(action.type) {
        case 'SAVE_CARD':
        return Object.assign({}, state, {
            isEditable: false
        })
    }
    return state
  }