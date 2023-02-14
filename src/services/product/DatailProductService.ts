import prismaClient from "../../prisma";


interface DatailProductRequest{
    product_id: string;
}


class DatailProductService{
    async execute({product_id}: DatailProductRequest){

        const product = await prismaClient.product.findFirst({
            where:{
                id: product_id
            }
        });

        return product
    }
}

export { DatailProductService }
