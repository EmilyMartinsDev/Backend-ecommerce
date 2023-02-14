import prismaClient from "../../prisma";


interface FinishCardRequest{
    card_id: string;
}


class FinishCardService{
    async execute({card_id}: FinishCardRequest){

      const  successCard = await prismaClient.card.update({
        where:{
            id: card_id
        },

        data:{
            status: true
        }
      });

      return successCard;

    }
}

export { FinishCardService}