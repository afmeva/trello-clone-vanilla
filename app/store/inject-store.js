import store from './store'

export default component => (...args) => component(...args, store)
