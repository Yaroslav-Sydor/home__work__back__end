const { Router } = require('express');
const UserComponent = require('./index');
const validation = require('./validation');
const { validate } = require('./validationMiddleware');

const router = Router();

/* router.get('/account', UserComponent.findOne) */

router.get('/', UserComponent.findAll);

router.post(
    '/',
    validate(validation.user),
    (req, res) => res.send('request processed'),
    UserComponent.create,
);

router.put(
    '/',
    validate(validation.user),
    (req, res) => res.send('request processed'),
    UserComponent.update,
);

router.delete('/', UserComponent.deleteUser);

module.exports = router;
