import express, { Router } from 'express'
import { getProductById, getProducts } from '../controllers/productControllers.js'


const router = Router()

// @desc Fetch all products
// @route GET api/products/
// @access Public
router.route('/').get(getProducts)


// @desc Fetch single product
// @route GET api/products/:id
// @access Public
router.route('/:id').get(getProductById)




export default router