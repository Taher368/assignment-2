"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const IVariantsZodSchema = zod_1.z.object({
    type: zod_1.z.string({ message: "Type is required" }),
    value: zod_1.z.string({ message: "Value is required" }),
});
const IProductZodSchema = zod_1.z.object({
    name: zod_1.z.string({ message: "Name is required" }),
    description: zod_1.z.string({ message: "description is required" }),
    price: zod_1.z
        .number({ message: "price must be in number" })
        .positive({ message: "Price must be in Positive value" }),
    category: zod_1.z.string({ message: "category is required" }),
    tags: zod_1.z.array(zod_1.z.string({ message: "tags is required" })),
    variants: zod_1.z.array(IVariantsZodSchema),
    inventory: zod_1.z.object({
        quantity: zod_1.z
            .number({ message: "Quantity need to be in nubmer" })
            .int({ message: "quantity must be in integer" }),
        inStock: zod_1.z.boolean({ message: "inStock is must be ture or false " }),
    }),
});
exports.default = IProductZodSchema;
