"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const mongoose_1 = require("mongoose");
const OrderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email" }),
    productId: zod_1.z
        .string()
        .refine((value) => mongoose_1.Types.ObjectId.isValid(value), {
        message: "Invalid ObjectId format",
    })
        .transform((value) => new mongoose_1.Types.ObjectId(value)),
    price: zod_1.z
        .number({ message: "price must be in number" })
        .positive({ message: "Price must be positibe" }),
    quantity: zod_1.z
        .number({ message: "quantity must be in number" })
        .int({ message: "quantity must be integer" })
        .positive({ message: "quantity must be positibe" }),
});
exports.default = OrderValidationSchema;
