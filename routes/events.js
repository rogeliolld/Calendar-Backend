/*
    Rutas de Usuarios/Events
    host + /api/events
*/

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");

const { 
    getEventos, 
    crearEvento, 
    actualizarEvento, 
    eliminarEventos 
} = require("../controllers/events");

const { check } = require("express-validator");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");


const router = Router();

// Todas tienes que pasar por la validacion del JWT
router.use( validarJWT );

//Obtener Eventos
router.get(
    '/', 
    getEventos
);

//Crear un nuevo Eventos
router.post(
      '/', 
      [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatorio').custom( isDate ),
        check('end', 'Fecha de finalizacion es obligatorio').custom( isDate ),


        validarCampos
      ],
      crearEvento
);

//Actualizar Eventos
router.put(
    '/:id', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatorio').custom( isDate ),
        check('end', 'Fecha de finalizacion es obligatorio').custom( isDate ),


        validarCampos
      ],
    actualizarEvento
);

//Eliminar Eventos
router.delete(
    '/:id', 
    eliminarEventos
);

module.exports = router;


