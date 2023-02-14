import { Request, Response } from "express";
import { CreateCardItemService } from "../../services/card/CreateCardItemService";


class CreateCardItemController{
    async handle(req: Request, res:Response){
        const user_id = req.user_id as string;
        const {amount, product_id } = req.body

        const createCardItemService = new CreateCardItemService();
        const cardItem = await createCardItemService.execute({
            user_id, amount, product_id
        })

        return res.json(cardItem)
    }
}

export { CreateCardItemController}