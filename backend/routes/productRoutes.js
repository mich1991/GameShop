import express, { Router } from 'express'
import { getProductById, getProducts, deleteProductById, updateProductById, createProduct, createProductReview } from '../controllers/productControllers.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = Router()

// @desc Fetch all products
// @route GET api/products/
// @access Public
router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)


router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProductById)
    .put(protect, admin, updateProductById)

router.route('/:id/reviews').post(protect, createProductReview)

export default router