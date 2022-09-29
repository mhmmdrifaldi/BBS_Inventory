import * as ActionType from '../constants/BarangKeluar'

const INIT_STATE = {
	barkels: [],
	barkel: []
}

const BarkelReduce = (state = INIT_STATE, action) => {
	switch (action.type) {
		case ActionType.GET_BARANGKELUAR_REQUEST:
			return { ...state }
		case ActionType.GET_BARANGKELUAR_SUCCESS:
			return GetBarangKeluarSucceed(state, action)
		case ActionType.ADD_BARANGKELUAR_REQUEST:
			return { ...state }
		case ActionType.ADD_BARANGKELUAR_SUCCESS:
			return AddBarangKeluarSucceed(state, action)
		default:
			return state
	}
}

const GetBarangKeluarSucceed = (state, action) => {
  return {
    ...state,
    barkels: action.payload
  }
}

const AddBarangKeluarSucceed = (state,action) =>{
  const {payload} = action
  return {
    ...state,
    barkels: [...state.barkels,payload]
  }
}

export default BarkelReduce