import { NextFunction, Request, Response } from "express";

const handleNotFoundRouter = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);

  res.status(404);
  next(error.message);
};

export default handleNotFoundRouter;
