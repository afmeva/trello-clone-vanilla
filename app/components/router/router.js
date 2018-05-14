import { div } from '_core/virtual-dom'
import injectStore from '_store/inject-store'
import chronicle from './chronicle';

const URL_ROOT = '#/'
const DEFAULT_ROUTE = '#index.html'
const PARAM_REGEX = /:\w*/g
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
  const regex = getRegexp(route)

  return {
    route: `${URL_ROOT}${route}`,
    regex,
    component,
  }
}

const getRegexp = (route) => {
  let regexp = '';

  const str = route.replace(PARAM_REGEX, '(.*)')
  regexp = new RegExp(str)

  return regexp
}

const getParams = (route) => {
  let params = [...( route.match(PARAM_REGEX) || [] )]
  return params
}

const findComponent = (routes, path) => {
  const { component } = routes.find(({ route }) => route === path)
  return  component
}

const router = injectStore((...args) => {
  // store is always last argument
  const state = args.pop().getState()
  const routes = args

  const path = state.router.currentPath
  const component = findComponent(routes, path)

  console.log(getRegexp('board/:boardId/other/:otherId'))
  console.log(getRegexp('board/other/'))
  console.log(getParams('board/:boardId/other/:otherId'))
  console.log(getParams('board/other/'))
  return component 
})

export { link, router, route }