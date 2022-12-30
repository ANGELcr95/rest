import { Router } from 'express';
import { usersGet, usersPut, usersPost, usersDelete } from '../controllers/user';

const router = Router();

router.get('/',usersGet)

router.put('/:id',usersPut)

router.post('/',usersPost)

router.delete('/',usersDelete)

export default router;