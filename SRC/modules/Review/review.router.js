import {Router} from 'express'
import * as Controller from './review.controller.js'
import {auth} from '../../middleware/auth.js'
const router =Router({mergeParams:true});

router.post('/',auth(['user']),Controller.create);


export default router;