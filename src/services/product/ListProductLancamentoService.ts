import prismaClient from "../../prisma";

class ListProductLancamentoService{
    async execute(){

        const produtoLancamento = await prismaClient.product.findMany({
            where:{
                lancamento: true
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

        return produtoLancamento

    }


}
export { ListProductLancamentoService }