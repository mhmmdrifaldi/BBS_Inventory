import axios from 'axios'
import config from '../config/config'

const list = async()=>{
	try {
		const result = await axios.get(`${config.domain}/barang_keluar/`)
		return result.data
	} catch (error) {
		return await error.message
	}
}

// const findOne = async(id)=>{
// 	try {
// 		const result = await axios.get(`${config.domain}/barang_keluar/${id}`)
// 		return result.data
// 	} catch (error) {
// 		return error
// 	}
// }

const create = async(payload)=>{
	try {
		const result = await axios.post(`${config.domain}/barang_keluar/`,payload)
		return result
	} catch (error) {
		return await error.message
	}
}

// const updatePlus = async(data)=>{
// 	try {
// 		const result = await axios.put(`${config.domain}/barang_keluar/${data.id_barma}`,data)
// 		return result
// 	} catch (error) {
// 		return error
// 	}
// }

// const updateMinus = async(data)=>{
// 	try {
// 		const result = await axios.put(`${config.domain}/barang_keluar/minus/${data.id_barma}`,data)
// 		return result
// 	} catch (error) {
// 		return error
// 	}
// }

export default { list, create }