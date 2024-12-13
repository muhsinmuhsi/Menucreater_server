import { Request, Response } from "express";
import { Menu } from "../models/menu";
import  {MenuItem}  from "../models/menuItem";
import { Types } from 'mongoose';

export const addMenuItems=async(req:Request, res:Response): Promise<void>=>{

    try {
        const { name, description, price, menuId } = req.body;
    
        const menu = await Menu.findById(menuId);
        if (!menu) {
           res.status(404).json({ error: 'Menu not found' });
        }
    
        const menuItem = await MenuItem.create({ name, description, price, menuId });
    
        // Associate the item with the menu
        menu?.items.push(menuItem._id as Types.ObjectId);
        await menu?.save();
    
        res.status(201).json(menuItem);
      } catch (error:any) {
        res.status(500).json({ error: error.message });
      }
}

export const getMenuItem=async(req:Request,res:Response)=>{
    const {menuId}=req.params
  try {
    const menuItems=await MenuItem.find({menuId})
    if(!menuId){
        res.status(404).json({message:"item not found"})
    }
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({message:'internal server error'})
  }
    

}