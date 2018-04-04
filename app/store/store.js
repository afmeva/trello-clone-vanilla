import createModel from '../core/model'
import reducers from '../reducers/reducers'

const store = createModel(reducers)

export default store