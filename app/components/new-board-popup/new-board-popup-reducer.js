const INITIAL_STATE = {
  value: '',
  boards: []
}

export default (action, state = INITIAL_STATE) => {
  switch(action.type) {
    case 'CREATE_NEWBOARD':
      return {
        ...state,
        boards: [ ...state.boards, {
          name: state.value,
          url: state.value,
        }]
      }
    case 'UPDATE_NEWBOARD_POPUP_VALUE':
      return {
        ...state,
        value: action.payload
      };
  }
  return state
}