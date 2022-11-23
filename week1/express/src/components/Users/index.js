const Joi = require('joi');
const UserService = require('./service');

const schema = Joi.object()
    .keys({
        name: Joi.string()
            .min(3)
            .max(40)
            .required(),
        surname: Joi.string()
            .min(3)
            .max(40)
            .required(),
        email: Joi.string()
            .email()
            .min(3)
            .max(40)
            .required(),
    });
const data = {
    name: 'Jon',
    surname: 'Jons',
    email: 'jonjons@gmail.com',
};

const result = schema.validate(data);

console.log(result);

async function findAll(req, res) {
    try {
        const user = await UserService.findAll();

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function create(req, res) {
    try {
        const user = await UserService.create(req.body);

        return res.status(201).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}
async function update(req, res) {
    try {
        const user = await UserService.update(
            req.body.id,
            req.body.name,
            req.body.surname,
            req.body.email,
        );

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}
async function deleteUser(req, res) {
    try {
        const user = await UserService.deleteUser(req.body.id);

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

module.exports = {
    findAll,
    create,
    update,
    deleteUser,
};
