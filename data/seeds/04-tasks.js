// - [ ] A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:

//   - [ ] `task_id` - primary key
//   - [ ] `task_description` - required
//   - [ ] `task_notes` - optional
//   - [ ] `task_completed` - the database defaults it to `false` (integer 0) if not provided
//   - [ ] `project_id` - required and points to an actual `project_id` in the `projects` table




const tasks = [
    {
        task_notes: "project_1's 1st task",
        task_completed: false,
        task_description: "task_1",
        project_id: 1,
    },
    {
        task_notes: "project_1's 2nd task",
        task_completed: false,
        task_description: "task_2",
        project_id: 1,
    },
    {
        task_notes: "project_1's 3rd task",
        task_completed: false,
        task_description: "task_3",
        project_id: 1,
    },
]




exports.seed = async function (knex) {
    await knex('tasks').truncate();
    await knex('tasks').insert(tasks);
}



// async version seems cleaner to me but either way works.

// exports.seed = function (knex) {
//     return knex('projects')
//         .truncate().then(() => {
//             return knex('projects').insert(projects)
//         })
// };