import { Request, Response } from "express";
import { ListProductByCategoryService } from "../../services/product/ListProductByCategoryService";


class ListProductByCategoryController {
    async handle(req: Request, res: Response){

        const category_id = req.query.category_id as string;

        const listProductByCategoryService = new ListProductByCategoryService();
        const product = await listProductByCategoryService.execute({
            category_id
        });
    
        return res.json(product);
    }
}

export { ListProductByCategoryController}