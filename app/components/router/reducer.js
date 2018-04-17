export default (action, state = { currentPath: 'index.html' }) => {
  switch (action.type) {
    case 'URL_CHANGED':
      return Object.assign({}, state, {
        currentPath: action.payload
      })
  }
  return state
}