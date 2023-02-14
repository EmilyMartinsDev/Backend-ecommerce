import {Request, Response} from 'express';
import { FinishCardService } from '../../services/card/FinishCardService';


class FinishCardController{
    async handle(req: Request, res:Response){
        const {card_id} = req.body;

        const finishCardService = new FinishCardService();
        const successCard =  await finishCardService.execute({card_id});

        return res.json(successCard);
    }
}

export { FinishCardController }