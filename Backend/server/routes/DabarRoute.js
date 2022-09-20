import { Router } from 'express'
import IndexController from '../controller/IndexController'

const router = Router()
router.get('/', IndexController.DabarController.findAll)
router.get('/:id', IndexController.DabarController.findOne)
router.post('/', IndexController.DabarController.create)
router.put('/:id', IndexController.DabarController.update)
router.delete('/:id', IndexController.DabarController.deleted)

export default router