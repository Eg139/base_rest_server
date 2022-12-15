const {response, request} = require('express')

const usuariosGet = (req = request, res = response) => {
  const {q, nombre = 'no name', apikey} = req.query;
    res.json({
        msg: 'get api - controlador',
        q,
        nombre,
        apikey
    })
  }
const usuariosPut =  (req, res) => {
  //const id = req.params.id;
  const {id} = req.params //cuando hay muchos ids
    res.json({
        msg: 'put api - controlador'
    })
  }
  const usuariosPutEmpty =  (req, res) => {
      res.status(404).json({
          msg: 'No existe la ruta a la que intenta acceder'
      })
    }
  const usuariosPost =  (req, res) => {
    const {nombre,edad} = req.body;
    res.json({
        msg: 'Post api - controlador',
        nombre,
        edad
    })
  }
  const usuariosDelete =  (req, res) => {
    res.json({
        msg: 'Delete api - controlador'
    })
  }
  const usuariosPatch =  (req, res) => {
    res.json({
        msg: 'patch api - controlador'
    })
  }


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPost,
    usuariosPut,
    usuariosPutEmpty
}