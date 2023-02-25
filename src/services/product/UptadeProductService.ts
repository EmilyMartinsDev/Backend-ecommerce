import prismaClient from "../../prisma";


interface UpdateProductRequest{
    name: string;
    price: string;
    description: string;
    product_id: string;
    banner: string;
    promocao: string;
    lancamento: string;
    destaque:  string;
    category_id: string;
    tamanho: string;
    cor: string;
}


class UpdateProductService{
    async execute({name, price, description, product_id, banner, lancamento, promocao, destaque, category_id, tamanho, cor  }: UpdateProductRequest){

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
                category_id: category_id,
                tamanho: tamanho,
                cor: cor

            }   
        });

        return updatedProduct

    }
}

export { UpdateProductService }