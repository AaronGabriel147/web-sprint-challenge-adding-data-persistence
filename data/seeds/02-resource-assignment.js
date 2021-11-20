// - [ ] A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table.
//       You decide what columns to use.




const resourceAssignments = [
    {
        project_id: 1,
        resource_id: 1,
    },
    {
        project_id: 1,
        resource_id: 2,
    },
    {
        project_id: 2,
        resource_id: 3,
    },
]



exports.seed = async function (knex) {
    await knex('resourceAssignments').truncate();
    await knex('resourceAssignments').insert(resourceAssignments);
}
