import { takeEvery, all } from 'redux-saga/effects'
import * as ActionJenisBarang from '../constants/JenisBarang'

import { handleGetJenisBarang, handleGetOneJenisBarang, handleAddJenisBarang, handleEditJenisBarang, handleDelJenisBarang } from './JenisBarangSaga'

function* watchAll(){
	yield all([
		takeEvery(ActionJenisBarang.GET_JENISBARANG_REQUEST, handleGetJenisBarang),
		takeEvery(ActionJenisBarang.GETONE_JENISBARANG_REQUEST, handleGetOneJenisBarang),
		takeEvery(ActionJenisBarang.ADD_JENISBARANG_REQUEST, handleAddJenisBarang),
		takeEvery(ActionJenisBarang.EDIT_JENISBARANG_REQUEST, handleEditJenisBarang),
		takeEvery(ActionJenisBarang.DEL_JENISBARANG_REQUEST, handleDelJenisBarang)
	])
}

export default watchAll;