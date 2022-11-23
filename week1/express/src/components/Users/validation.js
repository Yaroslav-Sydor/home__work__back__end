const Joi = require('joi');

exports.user = Joi.object()
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
