import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductIdValid } from "../middlewares/isProductIdValid.middleware";
import { createProductBodySchema, editProductBodySchema } from "../schemas/products.schema";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";

export const productsRouter = Router();

const productsControllers = new ProductsControllers();

productsRouter.get("/", productsControllers.getProducts);

productsRouter.get("/:id", IsProductIdValid.execute, productsControllers.getOneProduct);

productsRouter.post("/", ValidateRequest.execute({ body: createProductBodySchema }), productsControllers.createProduct);

productsRouter.delete("/:id", IsProductIdValid.execute, productsControllers.deleteProduct);

productsRouter.patch("/:id", IsProductIdValid.execute, ValidateRequest.execute({ body: editProductBodySchema }), productsControllers.editProduct);
