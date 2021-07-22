// Cargamos modulos con require()
const app = require('./server.js')  // Cargamos el servidor
const config = require('./config.js') // Cargamos la configuracion

/*
* Start Server
*/
app.listen(config.PORT, () => {
    console.log('Server listening on port ' + config.PORT)
})