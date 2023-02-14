import { Request, Response } from "express";
import { ListItemsCardService } from "../../services/card/ListItemsCardService";

class ListCardItemController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id;

        const listCardItemsService = new ListItemsCardService();
        const itemsCard = await listCardItemsService.execute(user_id);

        return res.json(itemsCard);
    }
}

export { ListCardItemController }