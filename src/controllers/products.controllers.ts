import { Request, Response } from "express";
import { IProduct } from "../interfaces/products.interfaces";
import { generateId, productsDatabase } from "../database/database";

export class ProductsControllers{
    getProducts(req: Request, res: Response): Response{
        return res.status(200).json(productsDatabase);
    }

    getOneProduct(req: Request, res: Response): Response{
        const findProduct = productsDatabase.find(product => product.id === Number(req.params.id));

        return res.status(200).json(findProduct);
    }

    createProduct(req: Request, res: Response): Response{
        const newProduct: IProduct = { id: generateId(), name: req.body.name, price: req.body.price };
        
        productsDatabase.push(newProduct);

        return res.status(201).json(newProduct);
    }

    deleteProduct(req: Request, res: Response): Response{
        const index = productsDatabase.findIndex(product => product.id === Number(req.params.id));

        productsDatabase.splice(index, 1);

        return res.status(204).json();
    }
}