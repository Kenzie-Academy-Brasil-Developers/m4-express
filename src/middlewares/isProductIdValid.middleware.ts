import { NextFunction, Request, Response } from "express";
import { productsDatabase } from "../database/database";

export class IsProductIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        if(!productsDatabase.some(product => product.id === Number(req.params.id))){
            return res.status(404).json({ message: "Product not found."});
        }

        next();
    }
}