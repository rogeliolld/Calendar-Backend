const { response } = require("express");

const getEventos = (req, res = response) =>{

    return res.status(200).json({

            ok: true,
            msg: 'Obtener eventos'    
    
    })

}
const crearEvento = (req, res = response) => {

   //Verficar que tenga el evento

    return res.status(200).json({

            ok: true,
            msg: 'Crear eventos'    
    
    })

}
const actualizarEvento = (req, res = response) =>{

    return res.status(200).json({

            ok: true,
            msg: 'Actualizar eventos'    
    
    })

}
const eliminarEventos = (req, res = response) =>{

    return res.status(200).json({

            ok: true,
            msg: 'Eliminar eventos'    
    
    })

}

module.exports = {
        getEventos,
        crearEvento,
        actualizarEvento,
        eliminarEventos,
}



