import prismaClient from "../../prisma";

interface CreateCategoryRequest{
    name: string;
}

class CreateCategoryService{
    async execute({name}: CreateCategoryRequest){

        if(!name){
            throw new Error("name is incorrect")
        }

        const category = await prismaClient.category.create({
            data:{
                name: name,
            },
            select:{
                id: true,
                name: true,
            }
        });

        return category
    }
}

export { CreateCategoryService }