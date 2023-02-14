import prismaClient from "../../prisma";


interface UpdateProductRequest{
    name: string;
    price: string;
    description: string;
    product_id: string;
    banner: string;
    promocao: boolean;
    lancamento: boolean;
    destaque: boolean;
}


class UpdateProductService{
    async execute({name, price, description, product_id, banner, lancamento, promocao, destaque  }: UpdateProductRequest){

        if(!name || !price || !description || !banner){
            throw new Error("erro : campos inválidos")
        }

        const updatedProduct = await prismaClient.product.update({
            where:{
                id: product_id
            },
            data:{
                name: name,
                price: price,
                description: description,
                banner: banner,
                promocao: promocao,
                lancamento: lancamento,
                destaque: destaque,
            }
        });

        return updatedProduct

    }
}

export { UpdateProductService }