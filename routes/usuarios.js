const { Router } = require("express");
const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete, 
        usuariosPatch, 
        usuariosPutEmpty} = require("../controllers/usuarios.controller");

const router = Router();

router.get('/', usuariosGet)

  router.put('/:id', usuariosPut)
  router.put('/', usuariosPutEmpty,)

  router.post('/', usuariosPost)

  router.delete('/', usuariosDelete)

  router.patch('/', usuariosPatch)





module.exports= router;