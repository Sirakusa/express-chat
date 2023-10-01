const { Router } = require('express');

const authRouter = Router({ mergeParams: true });

authRouter.post('delete');
authRouter.get('/read');
