import * as ActionType from '../constants/DataBarang'

const INIT_STATE = {
	dabars: [],
	dabar: []
}

const DabarReduce = (state = INIT_STATE, action) => {
	switch (action.type) {
		case ActionType.GET_DATABARANG_REQUEST:
			return { ...state }
		case ActionType.GET_DATABARANG_SUCCESS:
			return GetDataBarangSucceed(state, action)
		case ActionType.GETONE_DATABARANG_REQUEST:
			return { ...state }
		case ActionType.GETONE_DATABARANG_SUCCESS:
			return GetOneDataBarangSucceed(state, action)
		case ActionType.ADD_DATABARANG_REQUEST:
			return { ...state }
		case ActionType.ADD_DATABARANG_SUCCESS:
			return AddDataBarangSucceed(state, action)
		case ActionType.EDIT_DATABARANG_REQUEST:
			return { ...state }
		case ActionType.EDIT_DATABARANG_SUCCESS:
			return EditDataBarangSucceed(state, action)
		case ActionType.DEL_DATABARANG_REQUEST:
			return { ...state }
		case ActionType.DEL_DATABARANG_SUCCESS:
			return DelDataBarangSucceed(state, action)
		default:
			return state
	}
}

const GetDataBarangSucceed = (state, action) => {
  return {
    ...state,
    dabars: action.payload
  }
}

const GetOneDataBarangSucceed = (state, action) => {
  return {
    ...state,
    dabar: action.payload
  }
}

const AddDataBarangSucceed = (state,action) =>{
  const {payload} = action
  return {
    ...state,
    dabars: [...state.dabars,payload]
  }
}

const EditDataBarangSucceed = (state, action) => {
  const { payload } = action
  const filterDabar = state.dabars.filter(jeb => jeb.id_dabar !== payload[0].id_dabar)
  return {
    ...state,
    dabars: [...filterDabar, payload[0]]
  }
}

const DelDataBarangSucceed = (state, action) => {
  const { payload } = action
  const filterDabar = state.dabars.filter(jeb => jeb.id_dabar !== payload)
  return {
    ...state,
    dabars: [...filterDabar]
  }
}

export default DabarReduce