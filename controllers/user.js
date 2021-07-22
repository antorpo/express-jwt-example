const jwt = require("jsonwebtoken");
const config = require("../config.js");

module.exports = (router) => {


  // Creamos el endpoint para logeo de usuarios que recibe un callback con (peticion, respuesta)
  router.post("/login", (request, response) => {

    console.log(request);
    // Chequeamos si el usuario y la contraseña son correctos  
    const { username, password } = request.body;

    if (username == "root" && password == "toor") {
      /* 
        Si son correctos devolvemos como respuesta el token recien firmado
        con nuestra clave secreta que funciona asi: 

        Authorization: Bearer [header].[payload].[signature]
        signature = algorithm(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
        */
      response.json({
        id: 1,
        username: "root",
        jwt: jwt.sign(
          {
            id: 1,
          },
          config.JWT_SECRET,
          { expiresIn: 60 * 60 }
        ),
      });
    } else {
      /*
        Si no son correctos los datos de sesion devolvemos un 401 (No autorizado)
        */
      response.json({
        error: {
          msg: "No autorizado!",
        },
      });
    }
  });
  
  return router;
};
