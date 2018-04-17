import withStore from '_store/withStore'

// no needed, just for being explicit
const { location } = window;
const listeners = []

const updateRouterState = withStore((store) => {
  const { hash } = location
  store.dispatch({ type: 'URL_CHANGED', payload: hash })
})

window.addEventListener('hashchange', withStore((e, store) => {
  updateRouterState()
}))

const chronicle = (store) => {
  updateRouterState()
  return {
    pushState(route) {
      location.hash = route
      store.dispatch({ type: 'URL_CHANGED', payload: route })
    },
    onChange(listener) {
      listeners.push(listener)
    }
  }
}

export default withStore(chronicle)()