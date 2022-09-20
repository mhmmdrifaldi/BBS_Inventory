import * as ActionType from '../constants/DataBarang'

export const GetDataBarangRequest = () => ({
  type : ActionType.GET_DATABARANG_REQUEST
})

export const GetDataBarangSuccess = (payload) => ({
  type : ActionType.GET_DATABARANG_SUCCESS,
  payload
})

export const GetDataBarangFailed = (payload) => ({
  type : ActionType.GET_DATABARANG_FAILED,
  payload
})

export const GetOneDataBarangRequest = (payload) => ({
  type : ActionType.GETONE_DATABARANG_REQUEST,
  payload
})

export const GetOneDataBarangSuccess = (payload) => ({
  type : ActionType.GETONE_DATABARANG_SUCCESS,
  payload
})

export const GetOneDataBarangFailed = (payload) => ({
  type : ActionType.GETONE_DATABARANG_FAILED,
  payload
})

export const AddDataBarangRequest = (payload) => ({
  type:ActionType.ADD_DATABARANG_REQUEST,
  payload
})

export const AddDataBarangSuccess = (payload) => ({
  type:ActionType.ADD_DATABARANG_SUCCESS,
  payload
})

export const AddDataBarangFailed = (payload) =>({
  type : ActionType.ADD_DATABARANG_FAILED,
  payload
})

export const EditDataBarangRequest = (payload) => ({
  type:ActionType.EDIT_DATABARANG_REQUEST,
  payload
})

export const EditDataBarangSuccess = (payload) => ({
  type:ActionType.EDIT_DATABARANG_SUCCESS,
  payload
})

export const EditDataBarangFailed = (payload) =>({
  type : ActionType.EDIT_DATABARANG_FAILED,
  payload
})

export const DelDataBarangRequest = (payload) => ({
  type:ActionType.DEL_DATABARANG_REQUEST,
  payload
})

export const DelDataBarangSuccess = (payload) => ({
  type:ActionType.DEL_DATABARANG_SUCCESS,
  payload
})

export const DelDataBarangFailed = (payload) =>({
  type : ActionType.DEL_DATABARANG_FAILED,
  payload
})