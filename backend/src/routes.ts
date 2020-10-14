import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import OrphangesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphangesController.create);
routes.get('/orphanages', OrphangesController.index);
routes.get('/orphanages/:id', OrphangesController.show);

export default routes;