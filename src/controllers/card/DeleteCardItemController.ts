import { Request, Response } from "express";
import { DeleteCardItemService } from "../../services/card/DeleteCardItemService";

class DeleteCardItemController{
    async handle(req: Request, res:Response){

        const {item_id} = req.params;

        const deleteCardItemService = new DeleteCardItemService();
        const itemDeleted = await deleteCardItemService.execute({item_id});

        return res.json(itemDeleted)
    }
}

export { DeleteCardItemController}