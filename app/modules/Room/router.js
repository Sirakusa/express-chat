const { Router } = require('express');
const { remove, readRoom } = require('./controller.js');

const authRouter = Router({ mergeParams: true });

authRouter.post('delete', remove);
authRouter.get('/read', readRoom);
