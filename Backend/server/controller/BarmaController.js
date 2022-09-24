import { sequelize } from "../models/init-models"

const findAll = async (req,res)=>{
	try {
		const dabar = await sequelize.query('SELECT * FROM data_barang ORDER BY nama_barang ASC', {type : sequelize.QueryTypes.SELECT})
		const nota = await sequelize.query(`SELECT id_nota, date_nota, TO_CHAR(date_nota,'DD Month YYYY') as date_nota_value FROM nota ORDER BY date_nota DESC`, {type : sequelize.QueryTypes.SELECT})
		const barma = await sequelize.query('SELECT * FROM barang_masuk b JOIN data_barang d ON b.barma_id_dabar = d.id_dabar', {type : sequelize.QueryTypes.SELECT})
		const result = { dabar, nota, barma }
		return res.send(result)
	} catch (error) {
		return res.status(404).send(error)
	}
}

const findOne = async (req,res) => {
	try {
		const nota = await sequelize.query(`SELECT n.id_nota, n.date_nota, TO_CHAR(n.date_nota,'DD Month YYYY') as date_nota_value, b.id_barma, d.nama_barang, b.stock FROM nota n JOIN barang_masuk b ON n.id_nota = b.barma_id_nota JOIN data_barang d ON b.barma_id_dabar = d.id_dabar WHERE n.id_nota = :id_nota ORDER BY d.nama_barang ASC`,
    {replacements : {id_nota : req.params.id},type : sequelize.QueryTypes.SELECT})
		const barma = await req.context.models.barang_masuk.findOne({
			where:{id_barma : req.params.id}
		})
		const result = { nota, barma }
		return res.send(result)
	} catch (error) {
		return res.status(404).send(error)
	}
}

const createNext = async (req,res,next)=>{
	try {
		const nota = await req.context.models.nota.create({
			date_nota : new Date()
		})
		req.nota = nota
		next()
	} catch (error) {
		return res.status(404).send(error)
	}
}

const createData = async (req,res,next)=>{
  const cekNota = req.nota
	const { dataBarang } = req.body

  try {
    for(let i = 0; i < dataBarang.length; i++) {
			await req.context.models.barang_masuk.create({
				barma_id_nota : cekNota.id_nota,
				barma_id_dabar : dataBarang[i].barma_id_dabar,
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
			await sequelize.query('UPDATE data_barang SET stock= stock + :stock where	id_dabar= :id_dabar',
			{replacements : {stock : dataBarang[i].stock, id_dabar : dataBarang[i].barma_id_dabar},type : sequelize.QueryTypes.UPDATE})
		}
	} catch (error) {
		return res.status(404).send(error)
	}
}

const updateDataPlusNext = async (req,res,next) => {
	try {
		await sequelize.query('UPDATE barang_masuk SET stock= :stock where id_barma= :id_barma',
			{replacements : {stock : req.body.stock, id_barma : req.params.id},type : sequelize.QueryTypes.UPDATE})
		next()
	} catch (error) {
		return res.status(404).send(error)
	}
}

const updateDataPlus = async (req,res) => {
	try {
		await sequelize.query('UPDATE data_barang SET stock= stock + :stock where id_dabar= :id_dabar',
			{replacements : {stock : req.body.stockData, id_dabar : req.body.id_dabar},type : sequelize.QueryTypes.UPDATE})
	} catch (error) {
		return res.status(404).send(error)
	}
}

const updateDataMinusNext = async (req,res,next) => {
	try {
		await sequelize.query('UPDATE barang_masuk SET stock= :stock where id_barma= :id_barma',
			{replacements : {stock : req.body.stock, id_barma : req.params.id},type : sequelize.QueryTypes.UPDATE})
		next()
	} catch (error) {
		return res.status(404).send(error)
	}
}

const updateDataMinus = async (req,res) => {
	try {
		await sequelize.query('UPDATE data_barang SET stock= stock - :stock where id_dabar= :id_dabar',
			{replacements : {stock : req.body.stockData, id_dabar : req.body.id_dabar},type : sequelize.QueryTypes.UPDATE})
	} catch (error) {
		return res.status(404).send(error)
	}
}

export default {
	findAll,
	findOne,
	createNext,
	createData,
	createUpdateData,
	updateDataPlusNext,
	updateDataPlus,
	updateDataMinusNext,
	updateDataMinus
}