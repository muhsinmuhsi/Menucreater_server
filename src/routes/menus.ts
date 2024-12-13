import express from 'express'
import { addmenus, deleteMenu, getmenus, getmenusById } from '../controllers/menucontrolls';

const router=express.Router();

router.post('/menus',addmenus)
router.get('/menus',getmenus)
router.get('/menu/:id',getmenusById)
router.delete('/menu/:id',deleteMenu)

export default router