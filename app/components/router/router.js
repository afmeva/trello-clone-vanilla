import { div } from '_core/virtual-dom'
import injectStore from '_store/inject-store'
import chronicle from './chronicle';

const URL_ROOT = '#'
const DEFAULT_ROUTE = '#index.html'
const routes = {}

const link = (attrs = {}, { route, content }) => {
  return div({
    ...attrs,
    onclick() {
      chronicle.pushState(`${URL_ROOT}${route}`)
    }
  }, content)
}

const route = ({ route, component }) => {
  routes[`${URL_ROOT}${route}`] = component
  return component
}

const router = injectStore((...args) => {
  // store is always last argument
  const state = args.pop().getState()
  const children = args

  const route = state.router.currentPath
  const component = routes[route]

  return component
    ? typeof component === 'function'
      ? component()
      : component
    : routes[DEFAULT_ROUTE]
})

export { link, router, route }