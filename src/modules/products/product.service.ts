

import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payLoad: TProduct) => {
    const result = await Product.create(payLoad);
    return result;
};

const getAllProducts = async () => {
    const result = await Product.find();
    return result;
};

const getProductById = async (id: string) => {
    const result = await Product.findById(id);
    return result;
};

const updateProduct = async (id: string, payLoad: Partial<TProduct>) => {
    const result = await Product.findByIdAndUpdate(id, payLoad, { new: true });
    return result;
};

const deleteProduct = async (id: string) => {
    const result = await Product.findByIdAndDelete(id);
    return result;
};

export const ProductServices = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
