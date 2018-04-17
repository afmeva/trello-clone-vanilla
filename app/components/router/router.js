import { div } from '_core/virtual-dom'
import withStore from '_store/withStore'
import chronicle from './chronicle';

const URL_ROOT = '#'
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
  const store = args.pop().getState() // store is always last argument
  const children = args

  const route = store.router.currentPath
  const component = routes[route]

  return component
    ? typeof component === 'function'
      ? component()
      : component
    : routes['#index.html']
})

export { anchor, router, route }