import prismaClient from "../../prisma";

class ListProductPromocaoService{
    async execute(){

        const produtoPromocao = await prismaClient.product.findMany({
            where:{
                promocao: true
            }
        });

        return produtoPromocao

    }


}
export { ListProductPromocaoService }