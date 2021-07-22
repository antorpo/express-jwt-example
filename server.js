const express = require("express");
const app = express();
const router = express.Router();

/**
   Agregamos el middleware que funcionara para las urls del tipo /api/*
   enviado como un callback que recibe (request, response, next)
 */
app.use("/api", require("./middlewares/auth.js"));

/*
    Agregamos una ruta protegida /hello-world, colocando su controlador
    /api/hello-world

   como el controlador es una funcion que recibe el objeto Router, se lo enviamos
   como argumento utilizando un parentesis adicional.

   require('./controllers/helloWorld')(router)
 */
app.use("/api", require("./controllers/helloWorld.js")(router));

/*
   Agregamos el contralador para la ruta /login
*/
app.use("/", require("./controllers/user.js")(router));

// Exportamos la instancia de express()
module.exports = app;
