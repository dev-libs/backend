const db = require('../data/dbConfig.js');

module.exports = {
    getLibByCategory,
    addAnswer,
    getAnswers
}

function getLibByCategory(category) {
    return db('libs as l')
        .innerJoin('categories as c', 'l.category_id', '=', 'c.id')
        .select('l.name', 'l.story', 'c.category')
        .where('c.id', '=', category)
}
function addAnswer(answer) {
    return db('answers').insert(answer, "id");
}
function getAnswers() {
    return db('answers');
}