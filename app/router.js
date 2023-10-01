const routerRoom = require('./modules/Room/router');
const routerMessage = require('./modules/Message/router');

module.exports = (app) => {
  app.use('/room', routerRoom);
  app.use('/message', routerMessage);

  app.use((req, res) => {
    res.status(404).send('This route it is not being supported yet!');
  });
};
