const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const User = require('./model');
const UserService = require('../Users/service');
const validation = require('../Users/validation');

async function account(req, res) {
    try {
        console.log(req.user);
        const user = await UserService.findById(req.user.user_id);

        if (!user) {
            return res.json({ message: 'No user found' });
        }

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        return res.json({ error });
    }
}

async function register(req, res) {
    try {
        const {
            firstName, lastName, email, password,
        } = req.body;

        if (!(email && password && firstName && lastName)) {
            res.status(400).send('All input is required');
        }

        const oldUser = await User.findOne({ email });

        if (oldUser) {
            res.status(409).send('User Already Exist. Please Login');
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });

        console.log(process.env.TOKEN_SECRET);
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_SECRET,
            {
                expiresIn: '2h',
            },
        );

        user.token = token;

        res.status(201).json({ user: new UserDto(user), token });
    } catch (err) {
        console.log(err);
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send('All input is required');
        }
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_SECRET,
                {
                    expiresIn: '2h',
                },
            );

            user.token = token;

            res.status(200).json(user);
        } else {
            res.status(400).send('Invalid Credentials');
        }
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    register,
    login,
    account,
};
