const findAll = async (req,res)=>{
	try {
		const jebar = await req.context.models.jenis_barang.findAll()
		const dabar = await req.context.models.data_barang.findAll()
		const result = { jebar, dabar }
		return res.send(result)
	} catch (error) {
		return res.status(404).send(error)
	}
}

const findOne = async (req,res)=>{
	try {
		const dabar = await req.context.models.data_barang.findOne({
			where:{id_dabar : req.params.id}
		})
		return res.send(dabar)
	} catch (error) {
		return res.status(404).send(error)
	}
}

const create = async (req,res)=>{
	try {
		const dabar = await req.context.models.data_barang.create({
			id_jebar : req.body.id_jebar,
			nama_barang : req.body.nama_barang,
			stock: 0
		})
		return res.send(dabar)
	} catch (error) {
		return res.status(404).send(error)
	}
}

const update = async (req,res)=>{
	try {
		const dabar = await req.context.models.data_barang.update({
			id_jebar: req.body.id_jebar,
			nama_jebar : req.body.nama_jebar,
			stock: req.body.stock
		},{ returning : true , where:{id_dabar : req.params.id}})
		return res.send(dabar)
	} catch (error) {
		return res.status(404).send(error)
	}
}

const deleted = async (req,res)=>{
	try {
		const dabar = await req.context.models.data_barang.destroy({
			where:{id_dabar : req.params.id}
		})
		return res.send('delete '+dabar+' rows')
	} catch (error) {
		return res.status(404).send(error)
	}
}

export default {
	findAll,
	findOne,
	create,
	update,
	deleted
}