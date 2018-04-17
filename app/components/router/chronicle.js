import store from '_store/store'

// no needed, just for being explicit
const { history } = window;
const listeners = []

window.addEventListener('popstate', () => {
  listeners.forEach(listener => listener(history.state))
})

const chronicle = {
  pushState(route) {
    history.pushState({ route }, route, route)
    listeners.forEach(listener => listener(history.state))
    store.dispatch({ type: 'URL_CHANGED' })
  },
  onChange(listener) {
    listeners.push(listener)
  }
}

export default chronicle