import { takeEvery, all } from 'redux-saga/effects'
import * as ActionJenisBarang from '../constants/JenisBarang'
import * as ActionDataBarang from '../constants/DataBarang'
import * as ActionBarangMasuk from '../constants/BarangMasuk'

import { handleGetJenisBarang, handleGetOneJenisBarang, handleAddJenisBarang, handleEditJenisBarang, handleDelJenisBarang } from './JenisBarangSaga'
import { handleGetDataBarang, handleGetOneDataBarang, handleAddDataBarang, handleEditDataBarang, handleDelDataBarang } from './DataBarangSaga'
import { handleGetBarangMasuk, handleGetOneBarangMasuk, handleAddBarangMasuk, handleEditPlusBarangMasuk, handleEditMinusBarangMasuk } from './BarangMasukSaga'

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
		takeEvery(ActionDataBarang.DEL_DATABARANG_REQUEST, handleDelDataBarang),

		takeEvery(ActionBarangMasuk.GET_BARANGMASUK_REQUEST, handleGetBarangMasuk),
		takeEvery(ActionBarangMasuk.GETONE_BARANGMASUK_REQUEST, handleGetOneBarangMasuk),
		takeEvery(ActionBarangMasuk.ADD_BARANGMASUK_REQUEST, handleAddBarangMasuk),
		takeEvery(ActionBarangMasuk.EDITPLUS_BARANGMASUK_REQUEST, handleEditPlusBarangMasuk),
		takeEvery(ActionBarangMasuk.EDITMINUS_BARANGMASUK_REQUEST, handleEditMinusBarangMasuk)
	])
}

export default watchAll;