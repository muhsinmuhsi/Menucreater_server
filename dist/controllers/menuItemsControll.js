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
exports.getMenuItem = exports.addMenuItems = void 0;
const menu_1 = require("../models/menu");
const menuItem_1 = require("../models/menuItem");
const addMenuItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, menuId } = req.body;
        const menu = yield menu_1.Menu.findById(menuId);
        if (!menu) {
            res.status(404).json({ error: 'Menu not found' });
        }
        const menuItem = yield menuItem_1.MenuItem.create({ name, description, price, menuId });
        // Associate the item with the menu
        menu === null || menu === void 0 ? void 0 : menu.items.push(menuItem._id);
        yield (menu === null || menu === void 0 ? void 0 : menu.save());
        res.status(201).json(menuItem);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.addMenuItems = addMenuItems;
const getMenuItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { menuId } = req.params;
    try {
        const menuItems = yield menuItem_1.MenuItem.find({ menuId });
        if (!menuId) {
            res.status(404).json({ message: "item not found" });
        }
        res.status(200).json(menuItems);
    }
    catch (error) {
        res.status(500).json({ message: 'internal server error' });
    }
});
exports.getMenuItem = getMenuItem;
