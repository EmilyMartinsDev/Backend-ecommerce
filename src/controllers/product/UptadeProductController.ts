import { Request, Response } from "express";
import { UpdateProductService } from "../../services/product/UptadeProductService";

class UptadeProductController{
    async handle(req: Request, res:Response){

        const {name, price, description, product_id, lancamento, destaque, promocao} = req.body

        const{ filename: banner} = req.file 

        const updateProductService = new UpdateProductService();
        const updatedProduct = await updateProductService.execute({
            name, price, description, product_id, banner, lancamento, destaque, promocao
        });

        return res.json(updatedProduct)
    }
}

export { UptadeProductController }