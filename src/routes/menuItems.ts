import express from 'express'
import { addMenuItems, getMenuItem } from '../controllers/menuItemsControll'
const router=express.Router()

router.post('/menu-items',addMenuItems)
router.get('menu-items',getMenuItem)

export default router 