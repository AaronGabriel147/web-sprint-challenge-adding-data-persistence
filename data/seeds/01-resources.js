// - [ ] A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:

//   - [ ] `resource_id` - primary key
//   - [ ] `resource_name` - required and unique
//   - [ ] `resource_description` - optional




// primary keys are not required for this table.



const resources = [
    {
        resource_name: "resource_1",
        resource_description: "1st resource",
    },
    {
        resource_name: "resource_2",
        resource_description: "2nd resource",
    },
    {
        resource_name: "resource_3",
        resource_description: "3rd resource",
    },
]



exports.seed = async function (knex) {
    await knex('resources').truncate();
    await knex('resources').insert(resources);
}



// async version seems cleaner to me but either way works.

// exports.seed = function (knex) {
//     return knex('projects')
//         .truncate().then(() => {
//             return knex('projects').insert(projects)
//         })
// };
