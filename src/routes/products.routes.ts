import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductIdValid } from "../middlewares/isProductIdValid.middleware";

export const productsRouter = Router();

const productsControllers = new ProductsControllers();

productsRouter.get("/", productsControllers.getProducts);

productsRouter.get("/:id", IsProductIdValid.execute, productsControllers.getOneProduct);

productsRouter.post("/", productsControllers.createProduct);

productsRouter.delete("/:id", IsProductIdValid.execute, productsControllers.deleteProduct);
