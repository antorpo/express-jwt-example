module.exports = (router) => {
  // Creamos el endpoint 'hello-world' que recibe un callback con (peticion, respuesta)
  router.get("/hello-world", (request, response) => {
    response.json({
      data: "Hello World!",
    });
  });

  return router;
};
