const db = require('../data/dbConfig.js');

module.exports = {
    getLibByCategory,
    addAnswer,
    getAnswers,
    getUserLibs,
    getCompletedLibsByCategory
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
function getUserLibs(id) {
    return db('answers as a')
        .innerJoin('libs as l', 'a.lib_id', '=', 'l.id')
        .select('l.name', 'l.story', 'a.answer', 'a.order')
        .where('a.user_id', '=', id)
}
function getCompletedLibsByCategory() {

}