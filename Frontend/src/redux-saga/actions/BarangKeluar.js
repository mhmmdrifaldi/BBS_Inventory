import * as ActionType from '../constants/BarangKeluar'

export const GetBarangKeluarPendingRequest = () => ({
  type : ActionType.GET_BARANGKELUARPENDING_REQUEST
})

export const GetBarangKeluarPendingSuccess = (payload) => ({
  type : ActionType.GET_BARANGKELUARPENDING_SUCCESS,
  payload
})

export const GetBarangKeluarPendingFailed = (payload) => ({
  type : ActionType.GET_BARANGKELUARPENDING_FAILED,
  payload
})

export const GetBarangKeluarProcessRequest = () => ({
  type : ActionType.GET_BARANGKELUARPROCESS_REQUEST
})

export const GetBarangKeluarProcessSuccess = (payload) => ({
  type : ActionType.GET_BARANGKELUARPROCESS_SUCCESS,
  payload
})

export const GetBarangKeluarProcessFailed = (payload) => ({
  type : ActionType.GET_BARANGKELUARPROCESS_FAILED,
  payload
})

export const GetBarangKeluarDoneRequest = () => ({
  type : ActionType.GET_BARANGKELUARDONE_REQUEST
})

export const GetBarangKeluarDoneSuccess = (payload) => ({
  type : ActionType.GET_BARANGKELUARDONE_SUCCESS,
  payload
})

export const GetBarangKeluarDoneFailed = (payload) => ({
  type : ActionType.GET_BARANGKELUARDONE_FAILED,
  payload
})

export const GetBarangKeluarDabarRequest = () => ({
  type : ActionType.GET_BARANGKELUARDABAR_REQUEST
})

export const GetBarangKeluarDabarSuccess = (payload) => ({
  type : ActionType.GET_BARANGKELUARDABAR_SUCCESS,
  payload
})

export const GetBarangKeluarDabarFailed = (payload) => ({
  type : ActionType.GET_BARANGKELUARDABAR_FAILED,
  payload
})

export const GetBarangKeluarBarkelRequest = () => ({
  type : ActionType.GET_BARANGKELUARBARKEL_REQUEST
})

export const GetBarangKeluarBarkelSuccess = (payload) => ({
  type : ActionType.GETONE_BARANGKELUARBARKEL_SUCCESS,
  payload
})

export const GetBarangKeluarBarkelFailed = (payload) => ({
  type : ActionType.GET_BARANGKELUARBARKEL_FAILED,
  payload
})

export const GetOneBarangKeluarPembeliRequest = (payload) => ({
  type : ActionType.GETONE_BARANGKELUARPEMBELI_REQUEST,
  payload
})

export const GetOneBarangKeluarPembeliSuccess = (payload) => ({
  type : ActionType.GETONE_BARANGKELUARPEMBELI_SUCCESS,
  payload
})

export const GetOneBarangKeluarPembeliFailed = (payload) => ({
  type : ActionType.GETONE_BARANGKELUARPEMBELI_FAILED,
  payload
})

export const GetOneBarangKeluarBarkelRequest = (payload) => ({
  type : ActionType.GETONE_BARANGKELUARBARKEL_REQUEST,
  payload
})

export const GetOneBarangKeluarBarkelSuccess = (payload) => ({
  type : ActionType.GETONE_BARANGKELUARBARKEL_SUCCESS,
  payload
})

export const GetOneBarangKeluarBarkelFailed = (payload) => ({
  type : ActionType.GETONE_BARANGKELUARBARKEL_FAILED,
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

export const EditStatusBarangKeluarRequest = (payload) => ({
  type:ActionType.EDITSTATUS_BARANGKELUAR_REQUEST,
  payload
})

export const EditStatusBarangKeluarSuccess = (payload) => ({
  type:ActionType.EDITSTATUS_BARANGKELUAR_SUCCESS,
  payload
})

export const EditStatusBarangKeluarFailed = (payload) =>({
  type : ActionType.EDITSTATUS_BARANGKELUAR_FAILED,
  payload
})