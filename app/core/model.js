const createModel = reducers => {
  const listeners = []
  const state = {}
  return {
    actions: {},
    getState() {
      return state
    },
    do(action) {
      Object.entries(reducers).forEach(([key, reducer]) => {
        state[key] = reducer(action, state[key])
      })
      listeners.forEach(listener => listener(state))
    },
    onChange(callback) {
      listeners.push(callback)
    }
  }
}

export default createModel