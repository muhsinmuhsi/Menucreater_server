import { Schema, model, Types, Document } from 'mongoose';

export interface IMenuItem extends Document {
  name: string;
  description: string;
  price: number;
  menuId: Types.ObjectId; 
}

const MenuItemSchema = new Schema<IMenuItem>({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    menuId: { type: Schema.Types.ObjectId, ref: 'Menu', required: true },
  },
  { timestamps: true }
);

export const MenuItem = model<IMenuItem>('MenuItem', MenuItemSchema);
