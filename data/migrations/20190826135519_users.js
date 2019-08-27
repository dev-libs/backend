exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 255)
        .notNullable()
        .unique();
      tbl.string('password', 255)
        .notNullable();
    })
    .createTable('answers', tbl => {
      tbl.increments();
      tbl.string('answer', 255)
        .notNullable();
      tbl.integer('lib_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('libs')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.integer('type_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('types')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.integer('order')
        .notNullable()
        .unsigned();
    })
    .createTable('libs', tbl => {
      tbl.increments();
      tbl.string('name', 255)
        .notNullable()
        .unique();
      tbl.text('story')
        .notNullable();
      tbl.integer('category_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('categories', tbl => {
      tbl.increments();
      tbl.string('category', 255)
        .notNullable()
        .unique();
    })
    .createTable('types', tbl => {
      tbl.increments();
      tbl.string('type', 255)
        .notNullable()
        .unique();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('types')
    .dropTableIfExists('categories')
    .dropTableIfExists('libs')
    .dropTableIfExists('answers')
    .dropTableIfExists('users')
};
