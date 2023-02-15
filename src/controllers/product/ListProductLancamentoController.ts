import {Request, Response} from 'express';
import { ListProductLancamentoService } from '../../services/product/ListProductLancamentoService';
class ListProductLancamentoController{
    async handle(req: Request, res:Response){

        const listProductLancamentoService = new ListProductLancamentoService();
        const produtoLancamento = await listProductLancamentoService.execute();

        return res.json(produtoLancamento)
    }
}

export { ListProductLancamentoController }