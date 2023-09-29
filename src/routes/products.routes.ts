import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";

export const productsRouter = Router();

const productsControllers = new ProductsControllers();

productsRouter.get("/", productsControllers.getProducts);

productsRouter.get("/:id", productsControllers.getOneProduct);

productsRouter.post("/", productsControllers.createProduct);

productsRouter.delete("/:id", productsControllers.deleteProduct);
