const routerRoom = require('./modules/Room/router.js');
const routerMessage = require('./modules/Message/router.js');

module.exports = (app) => {
  app.use('/room', routerRoom);
  app.use('/room', routerRoom);

  app.use((req, res) => {
    res.status(404).send('This route it is not being supported yet!');
  });
};
