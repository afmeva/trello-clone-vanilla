import { div } from '_core/virtual-dom'
import withStore from '_store/withStore'
import chronicle from './chronicle';

chronicle.onChange(chState => {
  console.log(chState)
})

// this is temporal. 
// server has to be configured for SPA capabilities 
const URL_ROOT = 'index.html#'

const routes = {}

const anchor = ({ route, text }) => {
  return div({
    onclick() {
      chronicle.pushState(`${URL_ROOT}${route}`)
    }
  }, text)
}

const route = ({ route, component }) => {
  routes[route] = component
}

const router = (children) => {
  const route = 'about.html'
  const component = routes[route]

  return component
    ? typeof component === 'function'
      ? component()
      : component
    : routes['index.html']
}

export { anchor, router, route }