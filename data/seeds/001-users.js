const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'bob', password: bcrypt.hashSync('bob', 10) }
      ]);
    });
};
