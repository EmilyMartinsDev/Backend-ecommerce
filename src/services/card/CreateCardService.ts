import prismaClient from "../../prisma";

class CreateCardService{
    async execute(user_id: string){


       const card = await prismaClient.card.create({
        data:{
            user_id: user_id
        }
       });

       return card;
    }   
}

export { CreateCardService }