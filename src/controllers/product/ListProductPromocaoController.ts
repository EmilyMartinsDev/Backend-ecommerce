import {Request, Response} from 'express';
import { ListProductPromocaoService } from '../../services/product/ListProductPromocaoService';
class ListProductPromocaoController{
    async handle(req: Request, res:Response){

        const listProductPromocaoService = new ListProductPromocaoService();
        const produtoPromocao = await listProductPromocaoService.execute();

        return res.json(produtoPromocao)
    }
}

export { ListProductPromocaoController }