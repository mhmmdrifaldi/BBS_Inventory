const findAll = async (req,res)=>{
	try {
		const jebar = await req.context.models.jenis_barang.findAll()
		return res.send(jebar)
	} catch (error) {
		return res.status(404).send(error)
	}
}

const create = async (req,res)=>{
	try {
		const jebar = await req.context.models.jenis_barang.create({
			nama_jebar : req.body.nama_jebar
		})
		return res.send(jebar)
	} catch (error) {
		return res.status(404).send(error)
	}
}

const update = async (req,res)=>{
	try {
		const jebar = await req.context.models.jenis_barang.update({
			nama_jebar : req.body.nama_jebar,
		},{ returning : true , where:{id_jebar : req.params.id}})
		return res.send(jebar)
	} catch (error) {
		return res.status(404).send(error)
	}
}

const deleted = async (req,res)=>{
	try {
		const jebar = await req.context.models.jenis_barang.destroy({
			where:{id_jebar : req.params.id}
		})
		return res.send('delete '+jebar+' rows')
	} catch (error) {
		return res.status(404).send(error)
	}
}

export default {
	findAll,
	create,
	update,
	deleted
}