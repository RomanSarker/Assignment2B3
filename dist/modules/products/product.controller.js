"use strict";
// product.controller.ts
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
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
class ProductControllers {
    static createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = yield product_service_1.ProductServices.createProduct(req.body);
                res.status(201).json(newProduct);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ error: error.message });
                }
                else {
                    res.status(400).json({ error: 'Unknown error occurred' });
                }
            }
        });
    }
    static getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield product_service_1.ProductServices.getAllProducts();
                res.status(200).json(products);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Unknown error occurred' });
                }
            }
        });
    }
    static getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { productId } = req.params;
                const product = yield product_service_1.ProductServices.getProductById(productId);
                if (!product) {
                    return res.status(404).json({ message: "Product not found" });
                }
                res.status(200).json(product);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Unknown error occurred' });
                }
            }
        });
    }
    static updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { productId } = req.params;
                const updatedProduct = yield product_service_1.ProductServices.updateProduct(productId, req.body);
                if (!updatedProduct) {
                    return res.status(404).json({ message: "Product not found" });
                }
                res.status(200).json(updatedProduct);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ error: error.message });
                }
                else {
                    res.status(400).json({ error: 'Unknown error occurred' });
                }
            }
        });
    }
    static deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { productId } = req.params;
                const deletedProduct = yield product_service_1.ProductServices.deleteProduct(productId);
                if (!deletedProduct) {
                    return res.status(404).json({ message: "Product not found" });
                }
                res.status(200).json({ success: true, message: "Product deleted successfully!", data: null });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Unknown error occurred' });
                }
            }
        });
    }
}
exports.ProductControllers = ProductControllers;
