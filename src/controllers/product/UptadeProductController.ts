import { Request, Response } from "express";
import { UpdateProductService } from "../../services/product/UptadeProductService";

class UptadeProductController{
    async handle(req: Request, res:Response){
        const {product_id} = req.params
        const {name, price, description,  lancamento, destaque, promocao, category_id, tamanho, cor} = req.body

        const{ filename: banner} = req.file 

        const updateProductService = new UpdateProductService();
        const updatedProduct = await updateProductService.execute({
            name, price, description, product_id, banner, lancamento, destaque, promocao, category_id, tamanho, cor
        });

        return res.json(updatedProduct)
    }
}

export { UptadeProductController }