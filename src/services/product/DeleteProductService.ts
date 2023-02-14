import prismaClient from "../../prisma";

interface DeleteProductRequest{
    product_id: string;
}

class DeleteProductService{
    async execute({product_id}: DeleteProductRequest){

        const productDeleted = await prismaClient.product.delete({
            where:{
                id: product_id
            },
            
        });

        return productDeleted
    }
}

export { DeleteProductService }