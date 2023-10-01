const { Router } = require('express');
const { remove, read } = require('./controller');

const routerRoom = Router({ mergeParams: true });

routerRoom.post('/', remove);
routerRoom.get('/', read);

module.exports = routerRoom;
