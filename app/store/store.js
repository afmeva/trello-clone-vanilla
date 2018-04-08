import { createModel } from '_core/model'
import reducers from '_reducers/reducers'

const store = createModel(reducers)

export default store
