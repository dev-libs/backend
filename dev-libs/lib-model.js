const db = require('../data/dbConfig.js');

module.exports = {
    getLibByCategory
}

function getLibByCategory(category) {
    return db('libs as l')
        .innerJoin('categories as c', 'l.category_id', '=', 'c.id')
        .select('l.name', 'l.story', 'c.category')
        .where('c.id', '=', category)
}