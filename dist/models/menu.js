"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const mongoose_1 = require("mongoose");
// Schema definition
const MenuSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    items: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'MenuItem' }],
}, { timestamps: true });
// Model creation
exports.Menu = (0, mongoose_1.model)('Menu', MenuSchema);
