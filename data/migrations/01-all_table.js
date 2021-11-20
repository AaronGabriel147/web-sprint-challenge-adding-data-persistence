

exports.up = function (knex) {
    return knex.schema

        .createTable('projects', function (table) {
            table.increments("project_id")
            table.string("project_name").notNullable()
            table.string("project_description")
            table.boolean("project_completed").defaultTo(false)
        })
        .createTable('resources', function (table) {
            table.increments("resource_id")
            table.string("resource_name").notNullable()
            table.string("resource_description")
        })
        .createTable('tasks', function (table) {
            table.increments("task_id")
            table.string("task_description").notNullable()
            table.string("task_notes")
            table.boolean("task_completed").defaultTo(false)
            // project_id required and points to an actual project_id in the projects table
            // Not 100% sure about the line below, it was a strange one. 
            table.integer("project_id").unsigned().notNullable().references("project_id").inTable("projects")
        })
        .createTable('project_resources', function (table) {
            // resource assignment connects a resource and a project, 
            // and is stored in a project_resources table. You decide what columns to use.
            table.integer("project_id").unsigned().notNullable().references("project_id").inTable("projects")
            table.integer("resource_id").unsigned().notNullable().references("resource_id").inTable("resources")
        })
};


exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists
        .dropTableIfExists('projects')
};


