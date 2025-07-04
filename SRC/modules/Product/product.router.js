import {Router} from 'express'
import * as Controller from './product.controller.js'
import {auth} from '../../middleware/auth.js'
import fileUpload,{fileValidation} from '../../Utils/multer.js';
import reviewRouter from './../Review/review.router.js'
const router =Router();
router.use('/:productId/reviews',reviewRouter);
router.post('/create',auth(['admin']),fileUpload(fileValidation.image).fields([
{name:'mainImage',maxCount:1},
{name:'subImages',maxCount:4}
]),Controller.create);
router.get('/',auth(['admin']),Controller.get)
router.get('/active',Controller.getActive)
router.get('/:id',Controller.getDetails)
router.delete('/:id',auth(['admin']),Controller.remove)
export default router;