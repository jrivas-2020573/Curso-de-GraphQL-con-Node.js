const createApp = require('./app');


(async () => { //funcion anonima que se ejecuta sola 
  const port = process.env.PORT || 3000;
  const app = await createApp();
  app.listen(port, () => {
    console.log(`http://localhost:${port}/graphql`);
  });
})();