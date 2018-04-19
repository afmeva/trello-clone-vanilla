import withStore from '_store/withStore'

// no needed, just for being explicit
const { location } = window;

const updateRouterState = withStore((store) => {
  const { hash } = location
  store.dispatch({ type: 'URL_CHANGED', payload: hash })
})

const pushState = withStore((route, store) => {
  location.hash = route
  store.dispatch({ type: 'URL_CHANGED', payload: route })
})

window.addEventListener('hashchange', withStore((e, store) => {
  updateRouterState()
}))

export default { pushState }