import express, {Request, Response, NextFunction} from 'express'
import { router } from './routes';
import 'express-async-errors';
import cors from 'cors'


const app = express();
app.use(express.json());

app.use(cors());

app.use(router);

app.use((err: Error, req:Request, res: Response, next:NextFunction)=>{
    if(err instanceof Error){
        return res.status(401).json({
            error: err.message
        });
    }

    return res.json({
        message: 'internal server error',
        status: 'error'
    })
})

app.listen(3333, ()=>{

    console.log('servido rodando')
})