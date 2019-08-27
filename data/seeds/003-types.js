
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('types').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        { type: 'noun' },
        { type: 'verb' },
        { type: 'adjective' },
        { type: 'adverb' },
        { type: 'number' },
        { type: 'color' },
      ]);
    });
};
