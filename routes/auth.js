/*
    Rutas de Usuarios/Auth
    host + /api/auth
*/

const { Router } = require('express');
const { crearUsuario, revalidarToken, loginUsuario } = require('../controllers/auth');
const router = Router();

router.post('/', loginUsuario);
router.post('/new', crearUsuario);
router.get('/renew', revalidarToken);

module.exports= router;