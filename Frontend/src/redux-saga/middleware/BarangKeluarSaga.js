import {call,put} from 'redux-saga/effects'
import apiBarkel from '../../api/api-barkel'
import { GetBarangKeluarPendingSuccess, GetBarangKeluarPendingFailed, GetBarangKeluarProcessSuccess, GetBarangKeluarProcessFailed, GetBarangKeluarDoneSuccess, GetBarangKeluarDoneFailed, GetBarangKeluarDabarSuccess, GetBarangKeluarDabarFailed, GetBarangKeluarBarkelSuccess, GetBarangKeluarBarkelFailed, GetOneBarangKeluarPembeliSuccess, GetOneBarangKeluarPembeliFailed, GetOneBarangKeluarBarkelSuccess, GetOneBarangKeluarBarkelFailed, AddBarangKeluarSuccess, AddBarangKeluarFailed, EditStatusBarangKeluarSuccess, EditStatusBarangKeluarFailed } from '../actions/BarangKeluar'

function* handleGetBarangKeluarPending(){
  try {
    const result = yield call(apiBarkel.dataPending)
    yield put(GetBarangKeluarPendingSuccess(result))
  } catch (error) {
    yield put(GetBarangKeluarPendingFailed(error))
  }
}

function* handleGetBarangKeluarProcess(){
  try {
    const result = yield call(apiBarkel.dataProcess)
    yield put(GetBarangKeluarProcessSuccess(result))
  } catch (error) {
    yield put(GetBarangKeluarProcessFailed(error))
  }
}

function* handleGetBarangKeluarDone(){
  try {
    const result = yield call(apiBarkel.dataDone)
    yield put(GetBarangKeluarDoneSuccess(result))
  } catch (error) {
    yield put(GetBarangKeluarDoneFailed(error))
  }
}

function* handleGetBarangKeluarDabar(){
  try {
    const result = yield call(apiBarkel.dataDabar)
    yield put(GetBarangKeluarDabarSuccess(result))
  } catch (error) {
    yield put(GetBarangKeluarDabarFailed(error))
  }
}

function* handleGetBarangKeluarBarkel(){
  try {
    const result = yield call(apiBarkel.dataBarkel)
    yield put(GetBarangKeluarBarkelSuccess(result))
  } catch (error) {
    yield put(GetBarangKeluarBarkelFailed(error))
  }
}

function* handleGetOneBarangKeluarPembeli(action){
	const {payload} = action
	try {
		const result = yield call(apiBarkel.findOnePembeli,payload)
		yield put(GetOneBarangKeluarPembeliSuccess(result))
	} catch (error) {
		yield put(GetOneBarangKeluarPembeliFailed(error))
	}
}

function* handleGetOneBarangKeluarBarkel(action){
	const {payload} = action
	try {
		const result = yield call(apiBarkel.findOneBarkel,payload)
		yield put(GetOneBarangKeluarBarkelSuccess(result))
	} catch (error) {
		yield put(GetOneBarangKeluarBarkelFailed(error))
	}
}

function* handleAddBarangKeluar(action){
  const {payload} = action
  try {
    const result = yield call(apiBarkel.create,payload)
    yield put(AddBarangKeluarSuccess(result.data))
  } catch (error) {
    yield put(AddBarangKeluarFailed(error))
  }
}

function* handleEditStatusBarangKeluar(action){
  const {payload} = action
  try {
    const result = yield call(apiBarkel.updateStatus, payload)
    yield put (EditStatusBarangKeluarSuccess(result.data[1]))
  } catch (error) {
    yield put (EditStatusBarangKeluarFailed(error))
  }
}

export {
  handleGetBarangKeluarPending,
  handleGetBarangKeluarProcess,
  handleGetBarangKeluarDone,
  handleGetBarangKeluarDabar,
  handleGetBarangKeluarBarkel,
  handleGetOneBarangKeluarPembeli,
  handleGetOneBarangKeluarBarkel,
  handleAddBarangKeluar,
  handleEditStatusBarangKeluar
}