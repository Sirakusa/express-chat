const { Router } = require('express');
const { remove, read, sendMessage } = require('./controller');

const routerMessage = Router({ mergeParams: true });

routerMessage.post('/:roomId', sendMessage);
routerMessage.delete('/', remove);
routerMessage.get('/', read);

module.exports = routerMessage;
