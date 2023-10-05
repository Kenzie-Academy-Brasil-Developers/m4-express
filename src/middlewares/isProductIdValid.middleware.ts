import { NextFunction, Request, Response } from "express";
import { productsDatabase } from "../database/database";
import { AppError } from "../errors/errors";

export class IsProductIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        if(!productsDatabase.some(product => product.id === Number(req.params.id))){
            throw new AppError(404, "Product not found.");
        }

        next();
    }
}