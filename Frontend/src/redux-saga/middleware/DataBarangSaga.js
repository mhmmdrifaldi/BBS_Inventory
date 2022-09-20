import {call,put} from 'redux-saga/effects'
import apiDabar from '../../api/api-dabar'
import { GetDataBarangSuccess, GetDataBarangFailed, GetOneDataBarangSuccess, GetOneDataBarangFailed, AddDataBarangSuccess, AddDataBarangFailed, EditDataBarangSuccess, EditDataBarangFailed, DelDataBarangSuccess, DelDataBarangFailed } from '../actions/DataBarang'

function* handleGetDataBarang(){
  try {
    const result = yield call(apiDabar.list)
    yield put(GetDataBarangSuccess(result))
  } catch (error) {
    yield put(GetDataBarangFailed(error))
  }
}

function* handleGetOneDataBarang(action){
	const {payload} = action
	try {
		const result = yield call(apiDabar.findOne,payload)
		yield put(GetOneDataBarangSuccess(result))
	} catch (error) {
		yield put(GetOneDataBarangFailed(error))
	}
}

function* handleAddDataBarang(action){
  const {payload} = action
  try {
    const result = yield call(apiDabar.create,payload)
    yield put(AddDataBarangSuccess(result.data))
  } catch (error) {
    yield put(AddDataBarangFailed(error))
  }
}

function* handleEditDataBarang(action){
  const {payload} = action
  try {
    const result = yield call(apiDabar.update, payload)
    yield put (EditDataBarangSuccess(result.data[1]))
  } catch (error) {
    yield put (EditDataBarangFailed(error))
  }
}

function* handleDelDataBarang(action){
	const{payload} = action
	try {
		const result = yield call(apiDabar.deleted,payload)
		yield put(DelDataBarangSuccess(result))
	} catch (error) {
		yield put(DelDataBarangFailed(error))
	}
}

export {
  handleGetDataBarang,
	handleGetOneDataBarang,
  handleAddDataBarang,
  handleEditDataBarang,
	handleDelDataBarang
}