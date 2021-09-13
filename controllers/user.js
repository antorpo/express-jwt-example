const jwt = require("jsonwebtoken");
const config = require("../config.js");

module.exports = (router) => {


  // Creamos el endpoint para logeo de usuarios que recibe un callback con (peticion, respuesta)
  router.post("/login", (request, response) => {
      console.log(request)
  })

  return router;
};