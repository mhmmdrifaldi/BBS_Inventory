import axios from 'axios'
import config from '../config/config'

const dataPending = async()=>{
	try {
		const result = await axios.get(`${config.domain}/barang_keluar/pending/`)
		return result.data
	} catch (error) {
		return await error.message
	}
}

const dataProcess = async()=>{
	try {
		const result = await axios.get(`${config.domain}/barang_keluar/process/`)
		return result.data
	} catch (error) {
		return await error.message
	}
}

const dataDone = async()=>{
	try {
		const result = await axios.get(`${config.domain}/barang_keluar/done/`)
		return result.data
	} catch (error) {
		return await error.message
	}
}

const dataDabar = async()=>{
	try {
		const result = await axios.get(`${config.domain}/barang_keluar/dabar/`)
		return result.data
	} catch (error) {
		return await error.message
	}
}

const dataBarkel = async()=>{
	try {
		const result = await axios.get(`${config.domain}/barang_keluar/barkel/`)
		return result.data
	} catch (error) {
		return await error.message
	}
}

const findOnePembeli = async(id)=>{
	try {
		const result = await axios.get(`${config.domain}/barang_keluar/pembeli/${id}`)
		return result.data
	} catch (error) {
		return error
	}
}

const findOneBarkel = async(id)=>{
	try {
		const result = await axios.get(`${config.domain}/barang_keluar/barkel/${id}`)
		return result.data
	} catch (error) {
		return error
	}
}

const create = async(payload)=>{
	try {
		const result = await axios.post(`${config.domain}/barang_keluar/`,payload)
		return result
	} catch (error) {
		return await error.message
	}
}

const updateStatus = async(data)=>{
	try {
		const result = await axios.put(`${config.domain}/barang_keluar/status/${data.id_user}`,data)
		return result
	} catch (error) {
		return error
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

export default { dataPending, dataProcess, dataDone, dataDabar, dataBarkel, findOnePembeli, findOneBarkel, create, updateStatus }