import express, { Router } from 'express'
import { getProductById, getProducts, deleteProductById, updateProductById, createProduct, createProductReview, getTopProducts } from '../controllers/productControllers.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = Router()

// @desc Fetch all products
// @route GET api/products/
// @access Public
router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)

router.get('/top', getTopProducts)

router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProductById)
    .put(protect, admin, updateProductById)

router.route('/:id/reviews').post(protect, createProductReview)


export default router