"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenu = exports.getmenusById = exports.getmenus = exports.addmenus = void 0;
const menu_1 = require("../models/menu");
const menuItem_1 = require("../models/menuItem");
const addmenus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    console.log(description, 'this is description');
    try {
        const newmenu = yield menu_1.Menu.create({
            name: name,
            description: description
        });
        res.status(201).json(newmenu);
    }
    catch (error) {
        res.status(500).json({ message: "internal server error", error: error.message });
    }
});
exports.addmenus = addmenus;
const getmenus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('thsiis test menuitem');
    try {
        const menus = yield menu_1.Menu.find();
        res.status(200).json(menus);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getmenus = getmenus;
const getmenusById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const menu = yield menu_1.Menu.findById(id).populate('items');
        if (!menu) {
            res.status(404).json({ error: "menu not found" });
        }
        console.log('thsiis test menuitem');
        res.status(200).json(menu);
    }
    catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
});
exports.getmenusById = getmenusById;
const deleteMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const menu = yield menu_1.Menu.findByIdAndDelete(id);
        if (!menu) {
            res.status(404).json({ error: 'Menu not found' });
            return;
        }
        // Remove all associated items
        yield menuItem_1.MenuItem.deleteMany({ menuId: id });
        res.status(200).json({ message: 'Menu deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteMenu = deleteMenu;
