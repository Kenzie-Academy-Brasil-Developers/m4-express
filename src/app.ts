import "express-async-errors";
import express, { json } from "express";
import { productsRouter } from "./routes/products.routes";
import { HandleErrors } from "./errors/handleErrors.middleware";

const app = express();

app.use(json());

app.use("/products", productsRouter);

app.use(HandleErrors.execute);

const port = 3000;

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
})