const db = require('../data/dbConfig.js');

module.exports = {
    addUser,
    getByFilter
}

function addUser(user) {
    return db('users').insert(user);
}
function getByFilter(filter) {
    return db('users').where(filter);
}