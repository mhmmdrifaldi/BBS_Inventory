import {call,put} from 'redux-saga/effects'
import apiBarkel from '../../api/api-barkel'
import { GetBarangKeluarSuccess, GetBarangKeluarFailed, AddBarangKeluarSuccess, AddBarangKeluarFailed } from '../actions/BarangKeluar'

function* handleGetBarangKeluar(){
  try {
    const result = yield call(apiBarkel.list)
    yield put(GetBarangKeluarSuccess(result))
  } catch (error) {
    yield put(GetBarangKeluarFailed(error))
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

export {
	handleGetBarangKeluar,
  handleAddBarangKeluar
}