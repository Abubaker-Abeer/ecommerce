import {Router} from 'express'
import * as Controller from './cart.controller.js'
import {auth} from '../../middleware/auth.js'
const router =Router();

router.post('/create',auth(['user']),Controller.addToCart);


export default router;