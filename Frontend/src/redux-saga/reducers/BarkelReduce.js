import * as ActionType from '../constants/BarangKeluar'

const INIT_STATE = {
	dataPending: [],
	dataProcess: [],
	dataDone: [],
	dataDabar: [],
	dataBarkel: [],
	barkelPembeli: [],
	barkel: []
}

const BarkelReduce = (state = INIT_STATE, action) => {
	switch (action.type) {
		case ActionType.GET_BARANGKELUARPENDING_REQUEST:
			return { ...state }
		case ActionType.GET_BARANGKELUARPENDING_SUCCESS:
			return GetBarangKeluarPendingSucceed(state, action)
		case ActionType.GET_BARANGKELUARPROCESS_REQUEST:
			return { ...state }
		case ActionType.GET_BARANGKELUARPROCESS_SUCCESS:
			return GetBarangKeluarProcessSucceed(state, action)
		case ActionType.GET_BARANGKELUARDONE_REQUEST:
			return { ...state }
		case ActionType.GET_BARANGKELUARDONE_SUCCESS:
			return GetBarangKeluarDoneSucceed(state, action)
		case ActionType.GET_BARANGKELUARDABAR_REQUEST:
			return { ...state }
		case ActionType.GET_BARANGKELUARDABAR_SUCCESS:
			return GetBarangKeluarDabarSucceed(state, action)
		case ActionType.GET_BARANGKELUARBARKEL_REQUEST:
			return { ...state }
		case ActionType.GET_BARANGKELUARBARKEL_SUCCESS:
			return GetBarangKeluarBarkelSucceed(state, action)
		case ActionType.GETONE_BARANGKELUARPEMBELI_REQUEST:
			return { ...state }
		case ActionType.GETONE_BARANGKELUARPEMBELI_SUCCESS:
			return GetOneBarangKeluarPembeliSucceed(state, action)
		case ActionType.GETONE_BARANGKELUARBARKEL_REQUEST:
			return { ...state }
		case ActionType.GETONE_BARANGKELUARBARKEL_SUCCESS:
			return GetOneBarangKeluarBarkelSucceed(state, action)
		case ActionType.ADD_BARANGKELUAR_REQUEST:
			return { ...state }
		case ActionType.ADD_BARANGKELUAR_SUCCESS:
			return AddBarangKeluarSucceed(state, action)
		case ActionType.EDITSTATUS_BARANGKELUAR_REQUEST:
			return { ...state }
		case ActionType.EDITSTATUS_BARANGKELUAR_SUCCESS:
			return EditStatusBarangKeluarSucceed(state, action)
		default:
			return state
	}
}

const GetBarangKeluarPendingSucceed = (state, action) => {
  return {
    ...state,
    dataPending: action.payload
  }
}

const GetBarangKeluarProcessSucceed = (state, action) => {
  return {
    ...state,
    dataProcess: action.payload
  }
}

const GetBarangKeluarDoneSucceed = (state, action) => {
  return {
    ...state,
    dataDone: action.payload
  }
}

const GetBarangKeluarDabarSucceed = (state, action) => {
  return {
    ...state,
    dataDabar: action.payload
  }
}

const GetBarangKeluarBarkelSucceed = (state, action) => {
  return {
    ...state,
    dataBarkel: action.payload
  }
}

const GetOneBarangKeluarPembeliSucceed = (state, action) => {
  return {
    ...state,
    barkelPembeli: action.payload
  }
}

const GetOneBarangKeluarBarkelSucceed = (state, action) => {
  return {
    ...state,
    barkel: action.payload
  }
}

const AddBarangKeluarSucceed = (state,action) =>{
  const {payload} = action
  return {
    ...state,
    dataPending: [...state.dataPending,payload]
  }
}

const EditStatusBarangKeluarSucceed = (state, action) => {
  const { payload } = action
  const filterBarkel = state.dataPending && state.dataPending.filter(data => data.id_user !== payload[0].id_user)
  return {
    ...state,
    dataPending: [...filterBarkel, payload[0]]
  }
}

export default BarkelReduce