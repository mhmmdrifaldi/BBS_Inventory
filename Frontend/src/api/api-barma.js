import axios from 'axios'
import config from '../config/config'

const list = async()=>{
	try {
		const result = await axios.get(`${config.domain}/barang_masuk/`)
		return result.data
	} catch (error) {
		return await error.message
	}
}

const findOneNota = async(id)=>{
	try {
		const result = await axios.get(`${config.domain}/barang_masuk/nota/${id}`)
		return result.data
	} catch (error) {
		return error
	}
}

const findOneBarma = async(id)=>{
	try {
		const result = await axios.get(`${config.domain}/barang_masuk/barma/${id}`)
		return result.data
	} catch (error) {
		return error
	}
}

const create = async(payload)=>{
	try {
		const result = await axios.post(`${config.domain}/barang_masuk/`,payload)
		return result
	} catch (error) {
		return await error.message
	}
}

const updatePlus = async(data)=>{
	try {
		const result = await axios.put(`${config.domain}/barang_masuk/${data.id_barma}`,data)
		return result
	} catch (error) {
		return error
	}
}

const updateMinus = async(data)=>{
	try {
		const result = await axios.put(`${config.domain}/barang_masuk/minus/${data.id_barma}`,data)
		return result
	} catch (error) {
		return error
	}
}

export default { list, findOneNota, findOneBarma, create, updatePlus, updateMinus }