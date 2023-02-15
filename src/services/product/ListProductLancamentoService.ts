import prismaClient from "../../prisma";

class ListProductLancamentoService{
    async execute(){

        const produtoLancamento = await prismaClient.product.findMany({
            where:{
                lancamento: true
            }
        });

        return produtoLancamento

    }


}
export { ListProductLancamentoService }