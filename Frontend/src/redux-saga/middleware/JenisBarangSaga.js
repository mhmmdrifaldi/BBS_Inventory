import {call,put} from 'redux-saga/effects'
import apiJebar from '../../api/api-jebar'
import { GetJenisBarangSuccess, GetJenisBarangFailed, GetOneJenisBarangSuccess, GetOneJenisBarangFailed, AddJenisBarangSuccess, AddJenisBarangFailed, EditJenisBarangSuccess, EditJenisBarangFailed, DelJenisBarangSuccess, DelJenisBarangFailed } from '../actions/JenisBarang'

function* handleGetJenisBarang(){
  try {
    const result = yield call(apiJebar.list)
    yield put(GetJenisBarangSuccess(result))
  } catch (error) {
    yield put(GetJenisBarangFailed(error))
  }
}

function* handleGetOneJenisBarang(action){
	const {payload} = action
	try {
		const result = yield call(apiJebar.findOne,payload)
		yield put(GetOneJenisBarangSuccess(result))
	} catch (error) {
		yield put(GetOneJenisBarangFailed(error))
	}
}

function* handleAddJenisBarang(action){
  const {payload} = action
  try {
    const result = yield call(apiJebar.create,payload)
    yield put(AddJenisBarangSuccess(result.data))
  } catch (error) {
    yield put(AddJenisBarangFailed(error))
  }
}

function* handleEditJenisBarang(action){
  const {payload} = action
  try {
    const result = yield call(apiJebar.update, payload)
    yield put (EditJenisBarangSuccess(result.data[1]))
  } catch (error) {
    yield put (EditJenisBarangFailed(error))
  }
}

function* handleDelJenisBarang(action){
	const{payload} = action
	try {
		const result = yield call(apiJebar.deleted,payload)
		yield put(DelJenisBarangSuccess(result))
	} catch (error) {
		yield put(DelJenisBarangFailed(error))
	}
}

export {
  handleGetJenisBarang,
	handleGetOneJenisBarang,
  handleAddJenisBarang,
  handleEditJenisBarang,
	handleDelJenisBarang
}