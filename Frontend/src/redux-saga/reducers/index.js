import { combineReducers } from 'redux'
import JebarReduce from './JebarReducer'
import DabarReduce from './DabarReducer'
import BarmaReduce from './BarmaReduce'
import BarkelReduce from './BarkelReduce'

const rootReducer = combineReducers({
	jebarState: JebarReduce,
	dabarState: DabarReduce,
	barmaState: BarmaReduce,
	barkelState: BarkelReduce
})

export default rootReducer