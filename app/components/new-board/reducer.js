export default (action, state = { isCreateBoardVisible: false }) => {
  switch (action.type) {
    case 'CREATE_NEWBOARD':
      return {
        ...state,
        isCreateBoardVisible: false
      }
    case 'SHOW_CREATE_BOARD_POPUP':
      return Object.assign({}, state, {
        isCreateBoardVisible: true
      })
    case 'HIDE_CREATE_BOARD_POPUP':
      return Object.assign({}, state, {
        isCreateBoardVisible: false
      })
  }
  return state
}