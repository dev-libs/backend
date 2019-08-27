const db = require('../data/dbConfig.js');

module.exports = {
    addUser,
    getByFilter,
    getUsers
}

function addUser(user) {
    return db('users').insert(user);
}
function getByFilter(filter) {
    return db('users').where(filter);
}
function getUsers() {
    return db('users');
}