const jwt = require("jsonwebtoken");
const config = require("../config.js");

/**
    Toda peticion recibe (peticion, respuesta), adicionalmente el middleware
    recibe next (siguiente) para dejar continuar a la ruta protegida.
*/
module.exports = (request, response, next) => {
  // Chequeamos si existe el header de autorizacion
  if (
    request.hasOwnProperty("headers") &&
    request.headers.hasOwnProperty("authorization")
  ) {
    try {
      /*
        Decodificamos y verificamos el JWT Token mirando su firma 
        jwt.verify(token, private_key | secret)
       */
      const token = request.headers["authorization"];
      request.user = jwt.verify(token, config.JWT_SECRET);
    } catch (err) {
      /*
            Si el token esta corrupto, se lanza un excepcion entonces
            devolvemos un Forbidden 
        */
      return response.status(403).json({
        error: {
          msg: "Autenticacion fallida!",
        },
      });
    }
  } else {
    /* Si no existe el header de autenticacion quiere decir que no hubo loggeo, devolvemos un 403 */
    return response.status(403).json({
      error: {
        msg: "No hay token!",
      },
    });
  }

  /*  
    En caso de existir el token y ademas ser valido permitimos el acceso con next()
  */
  next();
  return;
};
