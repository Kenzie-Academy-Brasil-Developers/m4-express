import { z } from "zod";

import { createProductBodySchema, editProductBodySchema, productSchema } from "../schemas/products.schema";

export type TProduct = z.infer<typeof productSchema>;

export type TCreateProductBody = z.infer<typeof createProductBodySchema>;

export type TEditProductBody = z.infer<typeof editProductBodySchema>;