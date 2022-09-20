import * as ActionType from '../constants/JenisBarang'

const INIT_STATE = {
	jebars: [],
	jebar: []
}

const JebarReduce = (state = INIT_STATE, action) => {
	switch (action.type) {
		case ActionType.GET_JENISBARANG_REQUEST:
			return { ...state }
		case ActionType.GET_JENISBARANG_SUCCESS:
			return GetJenisBarangSucceed(state, action)
		case ActionType.GETONE_JENISBARANG_REQUEST:
			return { ...state }
		case ActionType.GETONE_JENISBARANG_SUCCESS:
			return GetOneJenisBarangSucceed(state, action)
		case ActionType.ADD_JENISBARANG_REQUEST:
			return { ...state }
		case ActionType.ADD_JENISBARANG_SUCCESS:
			return AddJenisBarangSucceed(state, action)
		case ActionType.EDIT_JENISBARANG_REQUEST:
			return { ...state }
		case ActionType.EDIT_JENISBARANG_SUCCESS:
			return EditJenisBarangSucceed(state, action)
		case ActionType.DEL_JENISBARANG_REQUEST:
			return { ...state }
		case ActionType.DEL_JENISBARANG_SUCCESS:
			return DelJenisBarangSucceed(state, action)
		default:
			return state
	}
}

const GetJenisBarangSucceed = (state, action) => {
  return {
    ...state,
    jebars: action.payload
  }
}

const GetOneJenisBarangSucceed = (state, action) => {
  return {
    ...state,
    jebar: action.payload
  }
}

const AddJenisBarangSucceed = (state,action) =>{
  const {payload} = action
  return {
    ...state,
    jebars: [...state.jebars,payload]
  }
}

const EditJenisBarangSucceed = (state, action) => {
  const { payload } = action
  const filterJebar = state.jebars.filter(jeb => jeb.id_jebar !== payload[0].id_jebar)
  return {
    ...state,
    jebars: [...filterJebar, payload[0]]
  }
}

const DelJenisBarangSucceed = (state, action) => {
  const { payload } = action
  const filterJebar = state.jebars.filter(jeb => jeb.id_jebar !== payload)
  return {
    ...state,
    jebars: [...filterJebar]
  }
}

export default JebarReduce