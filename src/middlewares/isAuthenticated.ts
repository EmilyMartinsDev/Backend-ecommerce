import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


interface payloadProps{
    sub: string;
}


export function isAuthenticated(req: Request, res:Response, next:NextFunction){
    
    const authToken = req.headers.authorization;

    if(!authToken){
       return res.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try{

        const {sub} = verify(token, process.env.JWT_SECRET) as payloadProps;

        req.user_id = sub;

        next()

    }catch(err){
        res.status(401).end();
    }

}