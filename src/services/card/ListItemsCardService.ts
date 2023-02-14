import prismaClient from "../../prisma";

class ListItemsCardService{
    async execute(user_id : string){

        const card  = await prismaClient.card.findFirst({
            where: {
                user_id: user_id
            }
        });

        const itemsCard = await prismaClient.item.findMany({
            where:{
                card_id: card?.id
            }
        });

        return itemsCard
    }
}

export { ListItemsCardService}