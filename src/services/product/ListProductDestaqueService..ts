import prismaClient from "../../prisma";

class ListProductDestaqueService{
    async execute(){

        const produtoDestaque = await prismaClient.product.findMany({
            where:{
                destaque: 'active'
            },
            select:{
                id: true,
                name: true,
                price: true,
                description: true,
                lancamento: true,
                banner: true,
                category_id: true
            }
        });

        return produtoDestaque

    }


}
export { ListProductDestaqueService }