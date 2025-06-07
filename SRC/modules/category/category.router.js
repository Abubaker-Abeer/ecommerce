import {Router} from 'express'
import * as Controller from './category.controller.js'
import {auth} from '../../middleware/auth.js'
const router =Router();

router.post('/create',auth(['admin']),Controller.create);
router.get('/',auth(['user','admin']),Controller.get);
router.get('/active',Controller.getActive);
router.get('/:id',Controller.details);
router.put('/:id',auth(['admin']),Controller.update);
router.delete('/:id',auth(['admin']),Controller.remove);

export default router;