import prismaClient from "../../prisma";

class ListProductPromocaoService{
    async execute(){

        const produtoPromocao = await prismaClient.product.findMany({
            where:{
                promocao: 'active'
            }, select:{
                id: true,
                name: true,
                price: true,
                description: true,
                lancamento: true,
                banner: true,
                category_id: true
            }
        });

        return produtoPromocao

    }


}
export { ListProductPromocaoService }