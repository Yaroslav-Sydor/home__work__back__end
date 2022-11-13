const { Router } = require('express');
const UserComponent = require('./index');

const router = Router();

router.get('/', UserComponent.findAll);

router.post('/', UserComponent.create);

router.put('/', UserComponent.update);

router.delete('/', UserComponent.deleteUser);

module.exports = router;
