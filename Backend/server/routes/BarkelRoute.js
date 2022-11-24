import { Router } from 'express'
import IndexController from '../controller/IndexController'

const router = Router()
router.get('/pending', IndexController.BarkelController.findPending)
router.get('/process', IndexController.BarkelController.findProcess)
router.get('/done', IndexController.BarkelController.findDone)
router.get('/dabar', IndexController.BarkelController.findDabar)
router.get('/barkel', IndexController.BarkelController.findBarkel)
router.get('/pembeli/:id', IndexController.BarkelController.findOnePembeli)
router.get('/barkel/:id', IndexController.BarkelController.findOneBarkel)
router.post('/', IndexController.BarkelController.createNext, IndexController.BarkelController.createData, IndexController.BarkelController.createUpdateData)
router.put('/status/:id', IndexController.BarkelController.updateStatus)

export default router