import prismaClient from "../../prisma";


interface CreateCardItemRequest{
    user_id: string;
    amount: number;
    product_id: string;
    size: string;
    color: string;
    card_id:  CardId
}

interface CardId{
    id: string;
    status: boolean;
    user_id: string;
}

class CreateCardItemService{
    async execute({ amount, product_id, size, color, card_id}: CreateCardItemRequest){
        


        const cardItem = await prismaClient.item.create({
            data:{
                amount: amount,
                product_id: product_id,
                color: color,
                size: size,
                card_id: card_id.id
            },
            include:{
                product: true
            }
        });

        return cardItem;
    }
}

export { CreateCardItemService }