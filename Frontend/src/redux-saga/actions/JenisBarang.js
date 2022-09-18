import * as ActionType from '../constants/JenisBarang'

export const GetJenisBarangRequest = () => ({
  type : ActionType.GET_JENISBARANG_REQUEST
})

export const GetJenisBarangSuccess = (payload) => ({
  type : ActionType.GET_JENISBARANG_SUCCESS,
  payload
})

export const GetJenisBarangFailed = (payload) => ({
  type : ActionType.GET_JENISBARANG_FAILED,
  payload
})

export const GetOneJenisBarangRequest = (payload) => ({
  type : ActionType.GETONE_JENISBARANG_REQUEST,
  payload
})

export const GetOneJenisBarangSuccess = (payload) => ({
  type : ActionType.GETONE_JENISBARANG_SUCCESS,
  payload
})

export const GetOneJenisBarangFailed = (payload) => ({
  type : ActionType.GETONE_JENISBARANG_FAILED,
  payload
})

export const AddJenisBarangRequest = (payload) => ({
  type:ActionType.ADD_JENISBARANG_REQUEST,
  payload
})

export const AddJenisBarangSuccess = (payload) => ({
  type:ActionType.ADD_JENISBARANG_SUCCESS,
  payload
})

export const AddJenisBarangFailed = (payload) =>({
  type : ActionType.ADD_JENISBARANG_FAILED,
  payload
})

export const EditJenisBarangRequest = (payload) => ({
  type:ActionType.EDIT_JENISBARANG_REQUEST,
  payload
})

export const EditJenisBarangSuccess = (payload) => ({
  type:ActionType.EDIT_JENISBARANG_SUCCESS,
  payload
})

export const EditJenisBarangFailed = (payload) =>({
  type : ActionType.EDIT_JENISBARANG_FAILED,
  payload
})

export const DelJenisBarangRequest = (payload) => ({
  type:ActionType.DEL_JENISBARANG_REQUEST,
  payload
})

export const DelJenisBarangSuccess = (payload) => ({
  type:ActionType.DEL_JENISBARANG_SUCCESS,
  payload
})

export const DelJenisBarangFailed = (payload) =>({
  type : ActionType.DEL_JENISBARANG_FAILED,
  payload
})