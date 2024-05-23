// product.controller.ts

import { Request, Response } from "express";
import { ProductServices } from "./product.service";

export class ProductControllers {
    static async createProduct(req: Request, res: Response) {
        try {
            const newProduct = await ProductServices.createProduct(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: 'Unknown error occurred' });
            }
        }
    }

    static async getAllProducts(req: Request, res: Response) {
        try {
            const products = await ProductServices.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    }

    static async getProductById(req: Request, res: Response) {
        try {
            const { productId } = req.params;
            const product = await ProductServices.getProductById(productId);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json(product);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    }

    static async updateProduct(req: Request, res: Response) {
        try {
            const { productId } = req.params;
            const updatedProduct = await ProductServices.updateProduct(productId, req.body);
            if (!updatedProduct) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json(updatedProduct);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: 'Unknown error occurred' });
            }
        }
    }

    static async deleteProduct(req: Request, res: Response) {
        try {
            const { productId } = req.params;
            const deletedProduct = await ProductServices.deleteProduct(productId);
            if (!deletedProduct) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ success: true, message: "Product deleted successfully!", data: null });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    }
}
