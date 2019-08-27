
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories')
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { category: 'general' },
        { category: 'JavaScript' },
        { category: 'Python' }
      ]);
    });
};
