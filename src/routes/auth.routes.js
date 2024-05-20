// auth.routes.js
import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/auth.controller';
import { createNewUser, getUsuarioTecnico } from '../controllers/inventario.controller';

const router = Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/register', getUsuarioTecnico)

export default router;
