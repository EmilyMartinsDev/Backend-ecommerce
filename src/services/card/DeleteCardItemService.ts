import prismaClient from "../../prisma";

interface DeleteCardItemRequest{
    item_id: string;
}

class DeleteCardItemService{
    async execute({item_id}: DeleteCardItemRequest){
        const itemDeleted = await prismaClient.item.delete({
            where:{
                id: item_id
            }
        });

        return itemDeleted;
    }
}

export { DeleteCardItemService}