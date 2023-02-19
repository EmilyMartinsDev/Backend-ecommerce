import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface CreateUserServiceRequest{

    name: string;
    email: string;
    password: string;

}


class CreateUserService{
    async execute({name, email, password}: CreateUserServiceRequest){

        if(!name || !email || !password){
            throw new Error("Preencha todos os campos")
        }

        const userAlreadyExist = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        });

        if(userAlreadyExist){
            throw new Error('user already exists')
        }

        const passwordSecret = await hash(password, 8)

        const user = await prismaClient.user.create({
           data:{
            name: name,
            email: email,
            password: passwordSecret
           },

           include:{
            card: true
           }
        });


        return user

    }   
}

export { CreateUserService }