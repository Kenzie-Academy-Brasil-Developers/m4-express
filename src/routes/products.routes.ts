import { Request, Response, Router } from "express";

export const productsRouter = Router();

productsRouter.get("/", (req: Request, res: Response) => {    
    return res.send("Leitura realizada com sucesso!");
})

productsRouter.post("/", (req: Request, res: Response) => {
    return res.status(201).json({ message: "Criação realizada com sucesso!"});
})

productsRouter.put("/", (req: Request, res: Response) => {
    return res.send("Atualização realizada com sucesso!")
})

productsRouter.delete("/", (req: Request, res: Response) => {
    return res.send("Exclusão realizada com sucesso!")
})
