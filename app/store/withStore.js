import store from './store'

const withStore = compenent => (...args) => compenent(...args, store)

export default withStore