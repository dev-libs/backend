const db = require('../data/dbConfig.js');

module.exports = {
    getLibByCategory,
    addAnswer,
    getUserLibs,
    getCompletedLibsByCategory,
    updateAnswers,
    deleteAnswers,
    getAnswers,
    getLibs,
    getMaxInstance
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
function getUserLibs(id) {
    return db('answers as a')
    .innerJoin('libs as l', 'a.lib_id', '=', 'l.id')
    .select('l.name', 'l.story', 'a.answer', 'a.order', 'a.instance')
    .where('a.user_id', '=', id)
}
function getCompletedLibsByCategory(category) {
    return db('answers as a')
    .innerJoin('libs as l', 'a.lib_id', '=', 'l.id')
    .innerJoin('categories as c', 'l.category_id', '=', 'c.id')
    .select('a.answer', 'a.user_id', 'a.lib_id', 'a.order', 'a.instance')
    .where('c.id', '=', category)
}
function updateAnswers(cId, iId, changes) {
    return db('answers as a')
        .where('a.instance', '=', id)
        .update(changes)
}
function deleteAnswers(cId, iId, ) {
    return db('answers as a')
        .where('a.instance', '=', id)
        .delete()
}
function getAnswers() {
    console.log("hi from answers")
    return db('answers');
}
function getLibs(){
    return db('libs');
}
function getMaxInstance() {
    return db('answers').select('answers.instance').orderBy('desc').first()
}