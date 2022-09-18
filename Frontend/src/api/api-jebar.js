import axios from 'axios'
import config from '../config/config'

const list = async()=>{
	try {
		const result = await axios.get(`${config.domain}/jenis_barang/`)
		return result.data
	} catch (error) {
		return await error.message
	}
}

const create = async(payload)=>{
	try {
		const result = await axios.post(`${config.domain}/jenis_barang/`,payload)
		return result
	} catch (error) {
		return await error.message
	}
}

const findOne = async(id)=>{
	try {
		const result = await axios.get(`${config.domain}/jenis_barang/${id}`)
		return result.data
	} catch (error) {
		return error
	}
}

const update = async(data)=>{
	try {
		const result = await axios.put(`${config.domain}/jenis_barang/${data.id_jebar}`,data)
		return result
	} catch (error) {
		return error
	}
}

const deleted = async(id)=>{
	try {
		const result = await axios.delete(`${config.domain}/jenis_barang/${id}`)
		return result
	} catch (error) {
		return await error.message
	}
}

export default { list, create, deleted, findOne, update }