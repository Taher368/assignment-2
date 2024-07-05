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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_services_1 = require("./product.services");
const product_validation_1 = __importDefault(require("./product.validation"));
const zod_1 = require("zod");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const validateData = product_validation_1.default.parse(productData);
        const result = yield product_services_1.ProductService.createProductToDB(validateData);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.json({ success: false, message: error.errors });
        }
        res.status(500).json({ success: false, message: "product created failed" });
    }
});
const updateData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        const validateData = product_validation_1.default.parse(productData);
        const result = yield product_services_1.ProductService.updateProdcutoODB(productId, validateData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "something went wrong" });
    }
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield product_services_1.ProductService.getAllProductFromDB(searchTerm);
        if (result.length > 0) {
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
        else {
            res.json({ success: false, message: "No product found" });
        }
    }
    catch (error) {
        res.json({ success: false, message: "something wen't wrong" });
    }
});
const getSingleProductFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_services_1.ProductService.getSingleProductFromDB(productId);
        res.json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.json({ success: false, message: "Product no found" });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield product_services_1.ProductService.deleteProductFromDb(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        res.json({ success: false, message: "something wen't wrong" });
    }
});
exports.ProductController = {
    createProduct,
    getAllProduct,
    getSingleProductFromDB,
    deleteProduct,
    updateData,
};
