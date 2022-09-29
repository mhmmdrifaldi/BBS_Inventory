import {call,put} from 'redux-saga/effects'
import apiBarma from '../../api/api-barma'
import { GetBarangMasukSuccess, GetBarangMasukFailed, GetOneBarangMasukNotaSuccess, GetOneBarangMasukNotaFailed, GetOneBarangMasukBarmaSuccess, GetOneBarangMasukBarmaFailed, AddBarangMasukSuccess, AddBarangMasukFailed, EditPlusBarangMasukSuccess, EditPlusBarangMasukFailed, EditMinusBarangMasukSuccess, EditMinusBarangMasukFailed } from '../actions/BarangMasuk'

function* handleGetBarangMasuk(){
  try {
    const result = yield call(apiBarma.list)
    yield put(GetBarangMasukSuccess(result))
  } catch (error) {
    yield put(GetBarangMasukFailed(error))
  }
}

function* handleGetOneBarangMasukNota(action){
	const {payload} = action
	try {
		const result = yield call(apiBarma.findOneNota,payload)
		yield put(GetOneBarangMasukNotaSuccess(result))
	} catch (error) {
		yield put(GetOneBarangMasukNotaFailed(error))
	}
}

function* handleGetOneBarangMasukBarma(action){
	const {payload} = action
	try {
		const result = yield call(apiBarma.findOneBarma,payload)
		yield put(GetOneBarangMasukBarmaSuccess(result))
	} catch (error) {
		yield put(GetOneBarangMasukBarmaFailed(error))
	}
}

function* handleAddBarangMasuk(action){
  const {payload} = action
  try {
    const result = yield call(apiBarma.create,payload)
    yield put(AddBarangMasukSuccess(result.data))
  } catch (error) {
    yield put(AddBarangMasukFailed(error))
  }
}

function* handleEditPlusBarangMasuk(action){
  const {payload} = action
  try {
    const result = yield call(apiBarma.updatePlus, payload)
    yield put (EditPlusBarangMasukSuccess(result.data[1]))
  } catch (error) {
    yield put (EditPlusBarangMasukFailed(error))
  }
}

function* handleEditMinusBarangMasuk(action){
  const {payload} = action
  try {
    const result = yield call(apiBarma.updateMinus, payload)
    yield put (EditMinusBarangMasukSuccess(result.data[1]))
  } catch (error) {
    yield put (EditMinusBarangMasukFailed(error))
  }
}

export {
  handleGetBarangMasuk,
	handleGetOneBarangMasukNota,
  handleGetOneBarangMasukBarma,
  handleAddBarangMasuk,
  handleEditPlusBarangMasuk,
  handleEditMinusBarangMasuk
}