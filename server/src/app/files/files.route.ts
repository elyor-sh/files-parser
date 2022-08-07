import {Router} from 'express'
import {filesController} from "./files.controller";


const router = Router()

router.post('/uploadFile', filesController.uploadFile)
router.get('/', filesController.get)

export default router