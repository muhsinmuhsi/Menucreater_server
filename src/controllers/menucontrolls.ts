import { NextFunction, Request, Response } from "express"
import { Menu } from "../models/menu"
import { MenuItem } from "../models/menuItem"

export const addmenus=async(req:Request,res:Response,next:NextFunction) =>{
  const {name,description}=req.body
  console.log(description,'this is description');
  
  try {
    const newmenu=await Menu.create({
        name:name,
        description:description
    })
    res.status(201).json(newmenu)

  } catch (error:any) {
    res.status(500).json({message:"internal server error",error:error.message})
    
  }
}

export const  getmenus=async(req:Request,res:Response)=>{
    console.log('thsiis test menuitem');
    try {
        const menus=await Menu.find();

        res.status(200).json(menus);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}

export const getmenusById=async(req:Request,res:Response)=>{
    try {
        const {id} = req.params
        const menu = await Menu.findById(id).populate('items');
        if(!menu){
            res.status(404).json({error:"menu not found"})
        }
        console.log('thsiis test menuitem');
        
        res.status(200).json(menu)
    } catch (error:any) {
        res.status(500).json({message:"internal server error"})
    }
}


export const deleteMenu = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
  
      const menu = await Menu.findByIdAndDelete(id);
      if (!menu) {
        res.status(404).json({ error: 'Menu not found' });
        return;
      }
  
      // Remove all associated items
      await MenuItem.deleteMany({ menuId: id });
  
      res.status(200).json({ message: 'Menu deleted successfully' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
  