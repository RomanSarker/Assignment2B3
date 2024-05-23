import express, { Request, Response } from "express";
import {productRoutes} from "./modules/products/product.route"
const app = express()

//parser
app.use(express.json());

app.use("/api/products",productRoutes)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello deess!')
})

export default app;