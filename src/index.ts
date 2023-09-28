import express, { json, Request, Response } from "express";

const app = express();

app.use(json());

app.get("/", (req: Request, res: Response) => {
    res.send("Olá mundo!");
})

const port = 3000;

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
})