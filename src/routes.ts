
//general imports
import  {Router, Request, Response} from 'express'
import { isAuthenticated } from './middlewares/isAuthenticated';
import { isAdmin } from './middlewares/isAdmin';
import uploadConfig from './config/multer'
import multer from 'multer';

// imports user
import { CreateUserController } from './controllers/user/createUserController'; 
import { AuthUserController } from './controllers/user/AuthUserController';
import { DatailUserController } from './controllers/user/DatailUserController';

//imports category
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

//imports Product
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListProductByCategoryController } from './controllers/product/ListProductByCategoryController';
import { DatailProductController } from './controllers/product/DatailProductController';
import { UptadeProductController } from './controllers/product/UptadeProductController';
import { DeleteProductController } from './controllers/product/DeleteProductController';
import { ListProductLancamentoController } from './controllers/product/ListProductLancamentoController';
import { ListProductDestaqueController } from './controllers/product/ListProductDestaqueController';
import { ListProductPromocaoController } from './controllers/product/ListProductPromocaoController';



//imports card
import { CreateCardController } from './controllers/card/CreateCardController';
import { CreateCardItemController } from './controllers/card/CreateCardItemController';
import { DeleteCardItemController } from './controllers/card/DeleteCardItemController';
import { ListCardItemController } from './controllers/card/ListCardItemController';
import { FinishCardController } from './controllers/card/FinishCardController';


const upload = multer(uploadConfig.upload('./tmp'));

const router = Router();

// rotas user
    router.post('/register', new CreateUserController().handle);
    router.post('/session', new AuthUserController().handle);
    router.get('/me', isAuthenticated, new DatailUserController().handle);

//rotas category
    router.post('/category', isAuthenticated, isAdmin, new CreateCategoryController().handle);
    router.get('/category',  new ListCategoryController().handle);
     
// Rotas Produtos    
    router.post('/product', isAuthenticated, isAdmin, upload.single('file'),  new CreateProductController().handle);
    router.put('/product', isAuthenticated, isAdmin,upload.single('file'), new UptadeProductController().handle);
    router.delete('/product/delete', isAuthenticated, isAdmin, new DeleteProductController().handle);

    router.get('/product/promocao', new ListProductPromocaoController().handle)
    router.get('/product/destaque', new ListProductDestaqueController().handle)
    router.get('/product/lancamento', new ListProductLancamentoController().handle )
    router.get('/category/product', isAuthenticated, new ListProductByCategoryController().handle);
    router.get('/category/product/datail/:product_id', new DatailProductController().handle );

// Rotas card
    router.post('/card', isAuthenticated, new CreateCardController().handle)
    router.post('/card/item/:product_id', isAuthenticated, new CreateCardItemController().handle );
    router.delete('/card/item/:item_id', isAuthenticated, new DeleteCardItemController().handle);
    router.get('/card', isAuthenticated, new ListCardItemController().handle );
    router.put('/card/finish', isAuthenticated, new FinishCardController().handle);



export { router }