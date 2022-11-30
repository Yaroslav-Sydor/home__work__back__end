const { Router } = require('express');
const auth = require('./auth');
const UserComponent = require('./index');

const router = Router();

router.get('/account', auth, UserComponent.account);

router.post('/register', UserComponent.register);

router.post('/login', UserComponent.login);

module.exports = router;
