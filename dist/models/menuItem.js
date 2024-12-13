"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
const mongoose_1 = require("mongoose");
const MenuItemSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    menuId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Menu', required: true },
}, { timestamps: true });
exports.MenuItem = (0, mongoose_1.model)('MenuItem', MenuItemSchema);
