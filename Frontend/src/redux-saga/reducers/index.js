import { combineReducers } from 'redux'
import JebarReduce from './JebarReducer'

const rootReducer = combineReducers({
	jebarState: JebarReduce
})

export default rootReducer