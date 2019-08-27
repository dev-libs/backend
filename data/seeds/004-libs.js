
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('libs')
    .then(function () {
      // Inserts seed entries
      return knex('libs').insert([
        { 
          name: 'Python can be a real...',
          story: 'Python can be a real (adjective). In order to (verb) an app you will need to add (number 1-10) sets of (color) code.  Next you will input a (noun). Finally, be sure to (verb) the (noun) before you run the (noun) What happens after will (adverb) amaze you!  Just (verb) the app and see your (adjective) (noun).',
          category_id: 3
        },
        {
          name: 'Web Design',
          story: 'Web design is (adjective)! Build a/an (noun).  (Verb) it off to the (noun)!',
          category_id: 1
        },
        {
          name: 'JavaScript syntax',
          story: 'JavaScript syntax can be a/an (noun) . Once you learn you will be (adjective).',
          category_id: 2
        }
      ]);
    });
};
