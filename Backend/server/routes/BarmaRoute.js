import { Router } from 'express'
import IndexController from '../controller/IndexController'

const router = Router()
router.get('/', IndexController.BarmaController.findAll)
router.get('/:id', IndexController.BarmaController.findOne)
router.post('/', IndexController.BarmaController.createNext, IndexController.BarmaController.createData, IndexController.BarmaController.createUpdateData)
router.put('/:id', IndexController.BarmaController.updateDataPlusNext, IndexController.BarmaController.updateDataPlus)
router.put('/minus/:id', IndexController.BarmaController.updateDataMinusNext, IndexController.BarmaController.updateDataMinus)

export default router