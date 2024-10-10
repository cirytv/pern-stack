import { Request, Response } from 'express'
import Affiliate from '../models/Affiliate.model.ts'

export const createAffiliate = async (req: Request, res: Response) => {
  const affiliate = new Affiliate(req.body)
  affiliate.save()
  res.json('from post')
}
