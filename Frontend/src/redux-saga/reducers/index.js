import { combineReducers } from 'redux'
import JebarReduce from './JebarReducer'
import DabarReduce from './DabarReducer'

const rootReducer = combineReducers({
	jebarState: JebarReduce,
	dabarState: DabarReduce
})

export default rootReducer