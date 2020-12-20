import express, { Router } from 'express'
import { addOrderItems } from '../controllers/orderControllers.js'
import { protect } from '../middleware/authMiddleware.js'

const router = Router()

router.route('/').post(protect, addOrderItems)

export default router