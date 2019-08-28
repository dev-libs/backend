
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('answers')
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        { answer: 'light', lib_id: 1, user_id: 1, type_id: 3, order: 1, instance: 1 },
        { answer: 'drive', lib_id: 1, user_id: 1, type_id: 2, order: 2, instance: 1 },
        { answer: '7', lib_id: 1, user_id: 1, type_id: 5, order: 3, instance: 1 },
        { answer: 'purple', lib_id: 1, user_id: 1, type_id: 6, order: 4, instance: 1 },
        { answer: 'football', lib_id: 1, user_id: 1, type_id: 1, order: 5, instance: 1 },
        { answer: 'run', lib_id: 1, user_id: 1, type_id: 2, order: 6, instance: 1 },
        { answer: 'pizza', lib_id: 1, user_id: 1, type_id: 1, order: 7, instance: 1 },
        { answer: 'Tom Brady', lib_id: 1, user_id: 1, type_id: 1, order: 8, instance: 1 },
        { answer: 'happily', lib_id: 1, user_id: 1, type_id: 4, order: 9, instance: 1 },
        { answer: 'push', lib_id: 1, user_id: 1, type_id: 2, order: 10, instance: 1 },
        { answer: 'slow', lib_id: 1, user_id: 1, type_id: 3, order: 11, instance: 1 },
        { answer: 'trophy', lib_id: 1, user_id: 1, type_id: 1, order: 12, instance: 1 },
        { answer: 'fluffy', lib_id: 2, user_id: 1, type_id: 3, order: 1, instance:1 },
        { answer: 'goat', lib_id: 2, user_id: 1, type_id: 1, order: 2, instance:1 },
        { answer: 'confiscate', lib_id: 2, user_id: 1, type_id: 2, order: 3, instance:1 },
        { answer: 'shrubbery', lib_id: 2, user_id: 1, type_id: 1, order: 4, instance:1 },
        { answer: 'banana', lib_id: 3, user_id: 1, type_id: 1, order: 1, instance: 1 },
        { answer: 'sleepy', lib_id: 3, user_id: 1, type_id: 3, order: 2, instance: 1 }
      ]);
    });
};