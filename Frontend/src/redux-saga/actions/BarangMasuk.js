import * as ActionType from '../constants/BarangMasuk'

export const GetBarangMasukRequest = () => ({
  type : ActionType.GET_BARANGMASUK_REQUEST
})

export const GetBarangMasukSuccess = (payload) => ({
  type : ActionType.GET_BARANGMASUK_SUCCESS,
  payload
})

export const GetBarangMasukFailed = (payload) => ({
  type : ActionType.GET_BARANGMASUK_FAILED,
  payload
})

export const GetOneBarangMasukNotaRequest = (payload) => ({
  type : ActionType.GETONE_BARANGMASUKNOTA_REQUEST,
  payload
})

export const GetOneBarangMasukNotaSuccess = (payload) => ({
  type : ActionType.GETONE_BARANGMASUKNOTA_SUCCESS,
  payload
})

export const GetOneBarangMasukNotaFailed = (payload) => ({
  type : ActionType.GETONE_BARANGMASUKNOTA_FAILED,
  payload
})

export const GetOneBarangMasukBarmaRequest = (payload) => ({
  type : ActionType.GETONE_BARANGMASUKBARMA_REQUEST,
  payload
})

export const GetOneBarangMasukBarmaSuccess = (payload) => ({
  type : ActionType.GETONE_BARANGMASUKBARMA_SUCCESS,
  payload
})

export const GetOneBarangMasukBarmaFailed = (payload) => ({
  type : ActionType.GETONE_BARANGMASUKBARMA_FAILED,
  payload
})

export const AddBarangMasukRequest = (payload) => ({
  type:ActionType.ADD_BARANGMASUK_REQUEST,
  payload
})

export const AddBarangMasukSuccess = (payload) => ({
  type:ActionType.ADD_BARANGMASUK_SUCCESS,
  payload
})

export const AddBarangMasukFailed = (payload) =>({
  type : ActionType.ADD_BARANGMASUK_FAILED,
  payload
})

export const EditPlusBarangMasukRequest = (payload) => ({
  type:ActionType.EDITPLUS_BARANGMASUK_REQUEST,
  payload
})

export const EditPlusBarangMasukSuccess = (payload) => ({
  type:ActionType.EDITPLUS_BARANGMASUK_SUCCESS,
  payload
})

export const EditPlusBarangMasukFailed = (payload) =>({
  type : ActionType.EDITPLUS_BARANGMASUK_FAILED,
  payload
})

export const EditMinusBarangMasukRequest = (payload) => ({
  type:ActionType.EDITMINUS_BARANGMASUK_REQUEST,
  payload
})

export const EditMinusBarangMasukSuccess = (payload) => ({
  type:ActionType.EDITMINUS_BARANGMASUK_SUCCESS,
  payload
})

export const EditMinusBarangMasukFailed = (payload) =>({
  type : ActionType.EDITMINUS_BARANGMASUK_FAILED,
  payload
})