const { Router } = require('express');
const auth = require('./auth');
const UserComponent = require('./index');

const router = Router();

router.post(
    '/login',
    UserComponent.login,
    auth,
    (req, res) => {
        res.status(200).send('Welcome 🙌 ');
    },
);

router.post('/register', UserComponent.register);

module.exports = router;
