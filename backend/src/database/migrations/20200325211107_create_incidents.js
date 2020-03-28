
exports.up = function (knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        // Campo para referenciar a foreign key
        table.string('ong_id').notNullable();

        // Cria o relacionamento com a tabela 'ongs' (foreign key)
        table.foreign('ong_id').references('id').inTable('ongs');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('incidents');
};
