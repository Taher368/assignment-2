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
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
// create product data into database
const createProductToDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield product_model_1.Product.create(product);
    return data;
});
// update single product into database
const updateProdcutoODB = (productId, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const updateData = yield product_model_1.Product.findOneAndUpdate({ _id: productId }, { $set: productData }, { new: true }).lean();
    if (!updateData) {
        throw new Error("product not found!");
    }
    return updateData;
});
// get all products data available in database
const getAllProductFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let datas;
    if (searchTerm) {
        // Search for products matching searchTerm
        const regex = new RegExp(searchTerm, "i");
        datas = yield product_model_1.Product.find({ name: { $regex: regex } }).lean();
    }
    else {
        // If no searchTerm provided, fetch all products
        datas = yield product_model_1.Product.find().lean();
    }
    return datas;
});
// get single product data from database
const getSingleProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield product_model_1.Product.findOne({ _id: productId }).lean();
    if (data) {
        data.variants = data.variants.map((variant) => ({
            type: variant.type,
            value: variant.value,
        }));
    }
    if (data === null) {
        throw new Error("Product not found");
        return;
    }
    return data;
});
// delte product data from database
const deleteProductFromDb = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield product_model_1.Product.deleteOne({ _id: productId });
    return data;
});
exports.ProductService = {
    createProductToDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    deleteProductFromDb,
    updateProdcutoODB,
};
