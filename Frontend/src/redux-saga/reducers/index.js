import { combineReducers } from 'redux'
import JebarReduce from './JebarReducer'
import DabarReduce from './DabarReducer'
import BarmaReduce from './BarmaReduce'

const rootReducer = combineReducers({
	jebarState: JebarReduce,
	dabarState: DabarReduce,
	barmaState: BarmaReduce
})

export default rootReducer