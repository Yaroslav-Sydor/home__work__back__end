const { model } = require('mongoose');
const modelUser = require('./model');

async function findAll() {
    const user = await modelUser.find();

    return user;
}

async function create({ name, surname, email }) {
    const user = await modelUser.create({ name, surname, email });

    return user;
}

async function update(id, name, surname, email) {
    const result = await modelUser.findOneAndUpdate({ _id: id }, { name, surname, email });

    return result;
}

async function deleteUser(id) {
    const result = await modelUser.deleteOne({ _id: id });

    return result;
}

module.exports = {
    create,
    findAll,
    update,
    deleteUser,
};
