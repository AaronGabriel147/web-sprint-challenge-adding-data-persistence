// why does the file start with a number? Gabriel did it this way.

// Build the migration(s) in Knex inside the `data/migrations` folder using appropriate data types and constraints. **You must use the table names 
// and the column names described below.** To give a primary key a name different than `id`, do `table.increments("project_id")` instead of `table.increments()`.
// - [ ] A **project** is what needs to be done and is stored in a `projects` table with the following columns:

//   - [ ] `project_id` - primary key
//   - [ ] `project_name` - required
//   - [ ] `project_description` - optional
//   - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided


// WE do not worry about a primary key for this table.

const projects = [
    {
        project_name: 'Database creation',
        project_description: 'Creating a database with Gabriel.',
        project_completed: false
    },
    {
        project_name: 'Zoom repo with Zac',
        project_description: 'Learning advanced models.',
        project_completed: false
    },
    {
        project_name: 'Serious Study Time',
        project_description: 'I am really just playing with keyboards and listening to music.',
        project_completed: false
    },
]


exports.seed = async function (knex) {
    await knex('projects').truncate(); // clear out the table
    await knex('projects').insert(projects); // insert the data
}





// async version seems cleaner to me but either way works.

// exports.seed = function (knex) {
//     return knex('projects')
//         .truncate().then(() => {
//             return knex('projects').insert(projects)
//         })
// };


// _______________________________________

// Or you can do it like this:

// exports.seed = async function(knex) {
//     return await knex('projects').insert([
//         {
//             project_name: "project_1",
//             project_description: "1st project",
//             project_completed: false,
//         },
//         {
//             project_name: "project_2",
//             project_description: "2nd project",
//             project_completed: true,
//         },
//         {
//             project_name: "project_3",
//             project_description: "3rd project",
//             project_completed: false,
//         },
//     ])
// }