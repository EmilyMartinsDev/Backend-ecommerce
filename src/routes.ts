import  {Router, Request, Response} from 'express'
import { isAuthenticated } from './middlewares/isAuthenticated';
import { isAdmin } from './middlewares/isAdmin';

// imports user
import { CreateUserController } from './controllers/user/createUserController'; 
import { AuthUserController } from './controllers/user/AuthUserController';
import { DatailUserController } from './controllers/user/DatailUserController';

//imports category
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

const router = Router();

// INICIO ROTAS DE USUARIO
    router.post('/users', new CreateUserController().handle);
    router.post('/session', new AuthUserController().handle);
    router.get('/me', isAuthenticated, new DatailUserController().handle);

//INICIO ROTAS CATEGORIAS
    router.post('/category', isAuthenticated, isAdmin, new CreateCategoryController().handle)
    router.get('/category', isAuthenticated, new ListCategoryController().handle)







export { router }