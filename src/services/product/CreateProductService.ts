import prismaClient from "../../prisma";

interface CreateProductRequest{

    name: string;
    price: string ;
    description: string;
    banner: string;
    category_id: string;
    promocao: boolean;
    lancamento: boolean;
    destaque: boolean;
}

class CreateProductService{
    async execute({
        name,
        price,
        description,
        banner,
        promocao,
        lancamento,
        destaque,
        category_id,
    }: CreateProductRequest){

        if(!name || !price || !description || !banner){
            throw new Error("erro : campos inválidos")
        }

        const product = await prismaClient.product.create({
            data:{

                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
                promocao: promocao,
                lancamento: lancamento,
                destaque: destaque,
            }
        });

        return product
    }
}

export { CreateProductService }

