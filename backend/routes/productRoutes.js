import express, { Router } from 'express'
import { getProductById, getProducts, deleteProductById } from '../controllers/productControllers.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = Router()

// @desc Fetch all products
// @route GET api/products/
// @access Public
router.route('/').get(getProducts)


// @desc Fetch single product
// @route GET api/products/:id
// @access Public
router.route('/:id').get(getProductById).delete(protect, admin, deleteProductById)





export default router