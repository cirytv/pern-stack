import { Router } from 'express'
import {
  createAffiliate,
  deleteAffiliate,
  getAffiliateById,
  getAffiliates,
  updateAffiliate,
  updateAvailability,
} from './handlers/affiliate.ts'
import { body, param } from 'express-validator'
import { handleInputErrors } from './middleware/index.ts'
import { reset } from 'colors/index.js'

const router = Router()
// routing

router.get('/', getAffiliates)
router.get(
  '/:id',
  param('id').isInt().withMessage('ID no válido'),
  handleInputErrors,
  getAffiliateById
)

router.post(
  '/',
  // validate
  body('name').notEmpty().withMessage('Nombre de afiliado no puede ir vacio'),
  body('personalPhoneNumber')
    .notEmpty()
    .withMessage('personalPhoneNumber de afiliado no puede ir vacio'),
  body('rfc').notEmpty().withMessage('RFC de afiliado no puede ir vacio'),
  handleInputErrors,
  createAffiliate
)

router.put(
  '/:id',
  param('id').isInt().withMessage('Invalid Id'),
  body('name').notEmpty().withMessage('El nombre no puede ir vacio'),
  handleInputErrors,
  updateAffiliate
)

router.patch(
  '/:id',
  param('id').isInt().withMessage('ID no válido'),
  handleInputErrors,
  updateAvailability
)

router.delete(
  '/:id',
  param('id').isInt().withMessage('ID no válido'),
  handleInputErrors,
  deleteAffiliate
)

export default router
