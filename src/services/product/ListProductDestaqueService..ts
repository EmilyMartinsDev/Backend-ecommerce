import prismaClient from "../../prisma";

class ListProductDestaqueService{
    async execute(){

        const produtoDestaque = await prismaClient.product.findMany({
            where:{
                destaque: true
            }
        });

        return produtoDestaque

    }


}
export { ListProductDestaqueService }