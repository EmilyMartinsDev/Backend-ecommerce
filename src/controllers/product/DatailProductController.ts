import { Request, Response } from "express";
import { DatailProductService } from "../../services/product/DatailProductService";

class DatailProductController{
    async handle(req: Request, res:Response){

        const product_id = req.params.product_id as string;

        const datailProductService = new DatailProductService();
        const product = await datailProductService.execute({

            product_id
        })

        return res.json(product);
    }
}

export { DatailProductController}