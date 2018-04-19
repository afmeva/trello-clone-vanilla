import { div } from '_core/virtual-dom'
import withStore from '_store/withStore'
import chronicle from './chronicle';

const URL_ROOT = '#'
const DEFAULT_ROUTE = '#index.html'
const routes = {}

const anchor = ({ route, text }) => {
  return div({
    onclick() {
      chronicle.pushState(`${URL_ROOT}${route}`)
    }
  }, text)
}

const route = ({ route, component }) => {
  routes[`${URL_ROOT}${route}`] = component
  return component
}

const router = withStore((...args) => {
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

export { anchor, router, route }