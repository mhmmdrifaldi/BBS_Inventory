import { sequelize } from "../models/init-models"

const findAll = async (req,res)=>{
	try {
		const pending = await sequelize.query(`SELECT id_user, nama_user, alamat, status, date_pembelian, TO_CHAR(date_pembelian, 'DD Month YYYY') as date_pembelian_value, bukti_pemasangan FROM pembeli WHERE status = 'Pending' ORDER BY date_pembelian DESC`, {type : sequelize.QueryTypes.SELECT})
		const process = await sequelize.query(`SELECT id_user, nama_user, alamat, status, date_pembelian, TO_CHAR(date_pembelian, 'DD Month YYYY') as date_pembelian_value, bukti_pemasangan FROM pembeli WHERE status = 'On Process' ORDER BY date_pembelian`, {type : sequelize.QueryTypes.SELECT})
		const done = await sequelize.query(`SELECT id_user, nama_user, alamat, status, date_pembelian, TO_CHAR(date_pembelian, 'DD Month YYYY') as date_pembelian_value, bukti_pemasangan FROM pembeli WHERE status = 'Done' ORDER BY date_pembelian`, {type : sequelize.QueryTypes.SELECT})
		const dabar = await sequelize.query('SELECT * FROM data_barang ORDER BY nama_barang ASC', {type : sequelize.QueryTypes.SELECT})
		const result = { pending, process, done, dabar }
		return res.send(result)
	} catch (error) {
		return res.status(404).send(error)
	}
}

const createNext = async (req,res,next)=>{
	try {
		const pembeli = await req.context.models.pembeli.create({
			nama_user : req.body.nama_user,
			alamat : req.body.alamat,
			status : "Pending",
			date_pembelian : new Date()
		})
		req.pembeli = pembeli
		next()
	} catch (error) {
		return res.status(404).send(error)
	}
}

const createData = async (req,res,next)=>{
  const cekPembeli = req.pembeli
	const { dataBarang } = req.body

  try {
    for(let i = 0; i < dataBarang.length; i++) {
			await req.context.models.barang_keluar.create({
				barkel_id_user : cekPembeli.id_user,
				barkel_id_dabar : dataBarang[i].barkel_id_dabar,
				stock: dataBarang[i].stock
			})
		}
		next()
	} catch (error) {
    return res.status(404).send(error)
  }
}

const createUpdateData = async(req,res)=>{
	const { dataBarang } = req.body

	try {
		for(let i = 0; i < dataBarang.length; i++) {
			await sequelize.query('UPDATE data_barang SET stock= stock - :stock where	id_dabar= :id_dabar',
			{replacements : {stock : dataBarang[i].stock, id_dabar : dataBarang[i].barkel_id_dabar},type : sequelize.QueryTypes.UPDATE})
		}
	} catch (error) {
		return res.status(404).send(error)
	}
}

export default {
	findAll,
	createNext,
	createData,
	createUpdateData
}