"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const menus_1 = __importDefault(require("./routes/menus"));
const menuItems_1 = __importDefault(require("./routes/menuItems"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', menus_1.default);
app.use('/api', menuItems_1.default);
mongoose_1.default.connect(process.env.MONGO_URI || '')
    .then(() => console.log('mongodb connected'))
    .catch((err) => console.log(err));
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
