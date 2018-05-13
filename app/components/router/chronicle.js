import injectStore from '_store/inject-store'

// not needed, just for being explicit
const { location } = window;

const updateRouterState = injectStore((store) => {
  const { hash } = location
  store.dispatch({ type: 'URL_CHANGED', payload: hash })
})

const pushState = injectStore((route, store) => {
  location.hash = route
  store.dispatch({ type: 'URL_CHANGED', payload: route })
})

window.addEventListener('hashchange', injectStore((e, store) => {
  updateRouterState()
}))
updateRouterState()

export default { pushState }