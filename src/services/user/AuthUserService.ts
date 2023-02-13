import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from "jsonwebtoken";

interface AuthUserRequest{
    email: string;
    password:string;
}

class AuthUserService{
    async execute({email, password}: AuthUserRequest){

        if(!email || !password){
            throw new Error(" preencha os campos");
        }

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if(!user){
            throw new Error(" user not found");
        }

      const correctPassword = await compare(password, user.password);

        if(!correctPassword){
            throw new Error("email/password is incorrect");
        }

        const token = sign(
            {
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
            },
                process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d',
            }
        );

        return{
            id: user?.id,
            name: user?.name,
            email: user?.email,
            isAdmin: user?.isAdmin,
            token: token,
        }



    }
}


export { AuthUserService }