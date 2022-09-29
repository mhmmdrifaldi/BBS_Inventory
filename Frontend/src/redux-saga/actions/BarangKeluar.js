import * as ActionType from '../constants/BarangKeluar'

export const GetBarangKeluarRequest = () => ({
  type : ActionType.GET_BARANGKELUAR_REQUEST
})

export const GetBarangKeluarSuccess = (payload) => ({
  type : ActionType.GET_BARANGKELUAR_SUCCESS,
  payload
})

export const GetBarangKeluarFailed = (payload) => ({
  type : ActionType.GET_BARANGKELUAR_FAILED,
  payload
})

export const AddBarangKeluarRequest = (payload) => ({
  type:ActionType.ADD_BARANGKELUAR_REQUEST,
  payload
})

export const AddBarangKeluarSuccess = (payload) => ({
  type:ActionType.ADD_BARANGKELUAR_SUCCESS,
  payload
})

export const AddBarangKeluarFailed = (payload) =>({
  type : ActionType.ADD_BARANGKELUAR_FAILED,
  payload
})