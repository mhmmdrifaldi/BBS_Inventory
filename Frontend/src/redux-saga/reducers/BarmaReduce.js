import * as ActionType from '../constants/BarangMasuk'

const INIT_STATE = {
	barmas: [],
	barmaNota: [],
	barma:[]
}

const BarmaReduce = (state = INIT_STATE, action) => {
	switch (action.type) {
		case ActionType.GET_BARANGMASUK_REQUEST:
			return { ...state }
		case ActionType.GET_BARANGMASUK_SUCCESS:
			return GetBarangMasukSucceed(state, action)
		case ActionType.GETONE_BARANGMASUKNOTA_REQUEST:
			return { ...state }
		case ActionType.GETONE_BARANGMASUKNOTA_SUCCESS:
			return GetOneBarangMasukNotaSucceed(state, action)
		case ActionType.GETONE_BARANGMASUKBARMA_REQUEST:
			return { ...state }
		case ActionType.GETONE_BARANGMASUKBARMA_SUCCESS:
			return GetOneBarangMasukBarmaSucceed(state, action)
		case ActionType.ADD_BARANGMASUK_REQUEST:
			return { ...state }
		case ActionType.ADD_BARANGMASUK_SUCCESS:
			return AddBarangMasukSucceed(state, action)
		case ActionType.EDITPLUS_BARANGMASUK_REQUEST:
			return { ...state }
		case ActionType.EDITPLUS_BARANGMASUK_SUCCESS:
			return EditPlusBarangMasukSucceed(state, action)
		case ActionType.EDITMINUS_BARANGMASUK_REQUEST:
			return { ...state }
		case ActionType.EDITMINUS_BARANGMASUK_SUCCESS:
			return EditMinusBarangMasukSucceed(state, action)
		default:
			return state
	}
}

const GetBarangMasukSucceed = (state, action) => {
  return {
    ...state,
    barmas: action.payload
  }
}

const GetOneBarangMasukNotaSucceed = (state, action) => {
  return {
    ...state,
    barmaNota: action.payload
  }
}

const GetOneBarangMasukBarmaSucceed = (state, action) => {
  return {
    ...state,
    barma: action.payload
  }
}

const AddBarangMasukSucceed = (state,action) =>{
  const {payload} = action
  return {
    ...state,
    barmas: [...state.barmas,payload]
  }
}

const EditPlusBarangMasukSucceed = (state, action) => {
  const { payload } = action
  const filterBarma = state.barmas.filter(data => data.id_barma !== payload[0].id_barma)
  return {
    ...state,
    barmas: [...filterBarma, payload[0]]
  }
}

const EditMinusBarangMasukSucceed = (state, action) => {
  const { payload } = action
  const filterBarma = state.barmas.filter(data => data.id_barma !== payload[0].id_barma)
  return {
    ...state,
    barmas: [...filterBarma, payload[0]]
  }
}

export default BarmaReduce