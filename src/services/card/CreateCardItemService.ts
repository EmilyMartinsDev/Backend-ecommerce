import prismaClient from "../../prisma";


interface CreateCardItemRequest{
    user_id: string;
    amount: number;
    product_id: string;
}

class CreateCardItemService{
    async execute({user_id, amount, product_id}: CreateCardItemRequest){
        
        const card = await prismaClient.card.findFirst({
            where: {
                user_id: user_id
            }
        });

        const card_id = card?.id;

        const cardItem = await prismaClient.item.create({
            data:{
                amount: amount,
                product_id: product_id,
                card_id: card_id
            },
            include:{
                product: true
            }
        });

        return cardItem;
    }
}

export { CreateCardItemService }