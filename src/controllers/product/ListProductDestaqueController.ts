import {Request, Response} from 'express';
import { ListProductDestaqueService } from '../../services/product/ListProductDestaqueService.';
class ListProductDestaqueController{
    async handle(req: Request, res:Response){

        const listProductDestaqueService = new ListProductDestaqueService();
        const produtoDestaque = await listProductDestaqueService.execute();

        return res.json(produtoDestaque)
    }
}

export { ListProductDestaqueController }