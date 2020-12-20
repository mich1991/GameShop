import express, { Router } from 'express'
import { addOrderItems, getOrderById } from '../controllers/orderControllers.js'
import { protect } from '../middleware/authMiddleware.js'

const router = Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)

export default router