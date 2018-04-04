const createModel = reducer => {
  const listeners = []
  let state = {}

  const getState = () => state

  const dispatch = action => {
    state = reducer(action, state)
    listeners.forEach(listener => listener(state))
  }

  const onChange = (callback) => {
    listeners.push(callback)
  }

  dispatch({
    type: '@@INIT'
  })

  return { getState, dispatch, onChange }
}
const composeReducers = obj => (state, action) => {
  const newState = {}
  Object.entries(obj).forEach(([key, reducer]) => {
    newState[key] = reducer(action, state[key])
  })
  return newState
}

export { composeReducers }

export default createModel