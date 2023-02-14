import prismaClient from "../../prisma";


interface ListProductRequest{
    category_id: string;
}


class ListProductByCategoryService{
    async execute({category_id}: ListProductRequest){

        const product = await prismaClient.product.findMany({
            where:{
                category_id: category_id
            }
        });

        if(!product){
            throw new Error(" category product is not found");
        }

        return product;
    }
}
export { ListProductByCategoryService }