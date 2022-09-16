import { Router } from 'express'
import IndexController from '../controller/IndexController'

const router = Router()
router.get('/', IndexController.JebarController.findAll)
router.post('/', IndexController.JebarController.create)
router.put('/:id', IndexController.JebarController.update)
router.delete('/:id', IndexController.JebarController.deleted)

export default router