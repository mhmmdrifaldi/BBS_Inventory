import { Router } from 'express'
import IndexController from '../controller/IndexController'

const router = Router()
router.get('/', IndexController.BarkelController.findAll)
router.post('/', IndexController.BarkelController.createNext, IndexController.BarkelController.createData, IndexController.BarkelController.createUpdateData)

export default router