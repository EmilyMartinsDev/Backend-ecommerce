import { Request, Response, NextFunction } from "express";
import prismaClient from "../prisma";


export async function isAdmin(req:Request, res:Response, next:NextFunction){

    const user_id = req.user_id;

    const user = await prismaClient.user.findFirst({
        where: {
            id: user_id
        }
    });

    if(!user.isAdmin){
        return res.status(401).end()
    }

    next();

}