import { Router } from 'express'
import { createAffiliate } from './handlers/affiliate.ts'

const router = Router()
// routing

router.post('/', createAffiliate)

export default router
