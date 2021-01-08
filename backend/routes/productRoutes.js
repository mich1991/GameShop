import express, { Router } from 'express'
import { getProductById, getProducts, deleteProductById, updateProductById, createProduct } from '../controllers/productControllers.js'
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


export default router