import { takeEvery, all } from 'redux-saga/effects'
import * as ActionJenisBarang from '../constants/JenisBarang'
import * as ActionDataBarang from '../constants/DataBarang'

import { handleGetJenisBarang, handleGetOneJenisBarang, handleAddJenisBarang, handleEditJenisBarang, handleDelJenisBarang } from './JenisBarangSaga'
import { handleGetDataBarang, handleGetOneDataBarang, handleAddDataBarang, handleEditDataBarang, handleDelDataBarang } from './DataBarangSaga'

function *watchAll(){
	yield all([
		takeEvery(ActionJenisBarang.GET_JENISBARANG_REQUEST, handleGetJenisBarang),
		takeEvery(ActionJenisBarang.GETONE_JENISBARANG_REQUEST, handleGetOneJenisBarang),
		takeEvery(ActionJenisBarang.ADD_JENISBARANG_REQUEST, handleAddJenisBarang),
		takeEvery(ActionJenisBarang.EDIT_JENISBARANG_REQUEST, handleEditJenisBarang),
		takeEvery(ActionJenisBarang.DEL_JENISBARANG_REQUEST, handleDelJenisBarang),

		takeEvery(ActionDataBarang.GET_DATABARANG_REQUEST, handleGetDataBarang),
		takeEvery(ActionDataBarang.GETONE_DATABARANG_REQUEST, handleGetOneDataBarang),
		takeEvery(ActionDataBarang.ADD_DATABARANG_REQUEST, handleAddDataBarang),
		takeEvery(ActionDataBarang.EDIT_DATABARANG_REQUEST, handleEditDataBarang),
		takeEvery(ActionDataBarang.DEL_DATABARANG_REQUEST, handleDelDataBarang)
	])
}

export default watchAll;