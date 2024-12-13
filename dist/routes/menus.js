"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menucontrolls_1 = require("../controllers/menucontrolls");
const router = express_1.default.Router();
router.post('/menus', menucontrolls_1.addmenus);
router.get('/menus', menucontrolls_1.getmenus);
router.get('/menu/:id', menucontrolls_1.getmenusById);
router.delete('/menu/:id', menucontrolls_1.deleteMenu);
exports.default = router;
