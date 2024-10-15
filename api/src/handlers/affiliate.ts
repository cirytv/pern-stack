import { validationResult } from 'express-validator'
import { Request, Response } from 'express'
import Affiliate from '../models/Affiliate.model.ts'

export const getAffiliates = async (req: Request, res: Response) => {
  try {
    const affiliates = await Affiliate.findAll()
    res.json({ data: affiliates })
  } catch (error) {
    console.log(error)
  }
}

export const getAffiliateById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const affiliate = await Affiliate.findByPk(id)
    if (!affiliate) {
      return res.status(404).json({ message: 'Affiliate not found' })
    }
    res.json({ data: affiliate })
  } catch (error) {
    console.log(error)
  }
}

export const createAffiliate = async (req: Request, res: Response) => {
  try {
    const affiliate = await Affiliate.create(req.body)
    res.json({ data: affiliate })
  } catch (error) {
    console.log(error)
  }
}
export const updateAffiliate = async (req: Request, res: Response) => {
  const { id } = req.params
  const affiliate = await Affiliate.findByPk(id)

  if (!affiliate) {
    return res.status(404).json({
      error: 'Afiliado No Encontrado',
    })
  }

  // Actualizar
  await affiliate.update(req.body)
  await affiliate.save()
  res.json({ data: affiliate })
}

export const updateAvailability = async (req: Request, res: Response) => {
  const { id } = req.params
  const affiliate = await Affiliate.findByPk(id)

  if (!affiliate) {
    return res.status(404).json({
      error: 'Affiliate No Encontrado',
    })
  }

  // Actualizar
  affiliate.availability = !affiliate.dataValues.availability
  await affiliate.save()
  res.json({ data: affiliate })
}

export const deleteAffiliate = async (req: Request, res: Response) => {
  const { id } = req.params
  const affiliate = await Affiliate.findByPk(id)

  if (!affiliate) {
    return res.status(404).json({
      error: 'Affiliate No Encontrado',
    })
  }

  await affiliate.destroy()
  res.json({ data: 'Affiliate Eliminado' })
}
