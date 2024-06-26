"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./modules/products/product.route");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use("/api/products", product_route_1.productRoutes);
app.get('/', (req, res) => {
    res.send('Hello deess!');
});
exports.default = app;
