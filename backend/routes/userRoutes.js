import express, { Router } from 'express'
import { authUser } from '../controllers/userControllers.js'


const router = Router()

router.post('/login', authUser)

export default router