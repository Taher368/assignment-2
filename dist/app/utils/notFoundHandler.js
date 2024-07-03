"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleNotFoundRouter = (req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error.message);
};
exports.default = handleNotFoundRouter;
