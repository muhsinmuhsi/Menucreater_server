import { Schema, model, Document, Types } from 'mongoose';


// Interface for Menu
export interface IMenu extends Document {
  name: string;
  description: string;
  items: Types.ObjectId[]; 
}

// Schema definition
const MenuSchema = new Schema<IMenu>(
  {
    name: { type: String, required: true },
    description: { type: String },
    items: [{ type: Schema.Types.ObjectId, ref: 'MenuItem' }],
  },
  { timestamps: true }
);

// Model creation
export const Menu = model<IMenu>('Menu', MenuSchema);
