I added these scripts manually: 

  "scripts": {
    "test": "cross-env NODE_ENV=testing jest --verbose --runInBand --silent",
    "start": "node index.js",
    "server": "nodemon index.js",
    "migrate": "knex migrate:latest",
    "seed": "knex seed:run",
    "rollback": "knex migrate rollback"
  },

INSTALLS I ADDED:

  npm nodemon -D 
  npm i express colors helmet cors morgan dotenv
  npm i knex
  npm i sqlite3

// once the DB is written, added the following:
  npm run migrate



Added everything inside server.js and index.js
Added everything is the Data folder.



# Adding Data Persistence Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Data Persistence**. During this sprint, you studied **RDBMS, including SQL, multi-table queries, and data modeling**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a database based on given specifications**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers a few days after the challenge submission. For more information on the review process [click here.](https://www.notion.so/bloomtech/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)


Project Set Up
- [x] Run `npm install` to install your dependencies.
- [x] Run tests locally executing `npm test`.



### Introduction

In this project you will be given a set of requirements and must design a database to satisfy them. As a part of this process you'll also build an API with endpoints to access the data.

### Files to Complete

1. `package.json`
2. `index.js`
3. `api/server.js`
4. `model.js` inside `api/project`, `api/resource` and `api/task`
5. `router.js` inside `api/project`, `api/resource` and `api/task`
6. migration file(s)
7. seed file(s) **optional**




### Required Dependencies

The project needs some additional NPM dependencies in order to work.

### Required Scripts

Add `"start"`. `"server"`, `"migrate"` and `"rollback"` scripts to the `package.json` file.





### Required Tables

Build the migration(s) in Knex inside the `data/migrations` folder using appropriate data types and constraints. **You must use the table names and the column names described below.** To give a primary key a name different than `id`, do `table.increments("project_id")` instead of `table.increments()`.

- [x] A **project** is what needs to be done and is stored in a `projects` table with the following columns:

  - [x] `project_id` - primary key
  - [x] `project_name` - required
  - [x] `project_description` - optional
  - [x] `project_completed` - the database defaults it to `false` (integer 0) if not provided


- [x] A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:

  - [x] `resource_id` - primary key
  - [x] `resource_name` - required and unique
  - [x] `resource_description` - optional


- [x] A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:

  - [x] `task_id` - primary key
  - [x] `task_description` - required
  - [x] `task_notes` - optional
  - [x] `task_completed` - the database defaults it to `false` (integer 0) if not provided
  - [x] `project_id` - required and points to an actual `project_id` in the `projects` table


// Not sure I know what this means. It is not showing up in SQLite.
- [x] resource assignment connects a resource and a project, and is stored in a project_resources table. You decide what columns to use.







### Required Endpoints

Build an API inside the `api` folder with endpoints for:


- [ ] `[POST] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

- [x] `[GET] /api/projects`
  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`




- [x] `[POST] /api/resources`
  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

- [x] `[GET] /api/resources`
  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`




- [ ] `[POST] /api/tasks`
  - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

- [x] `[GET] /api/tasks`
  - Each task must include `project_name` and `project_description`
  - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`









**Notes:**
- Run tests locally by executing `npm run test`. Tests will be very broken until you flesh out the project sufficiently.
- You are welcome to create additional files for middlewares etc, but **do not move or rename existing files** or folders.
- Do not make changes to your `package.json` except to add **additional** dependencies and scripts. Do not update existing packages.
## Submission format

- [ ] Submit via Codegrade by pushing commits to your `main` branch on Github.
- [ ] Check Codegrade before the deadline to compare its results against your local tests.
- [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [ ] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.



1. Explain the difference between Relational Databases and SQL.
    There are many forms of data storage and ways to manipulate data, out of all of these forms, Relational Databases are the most common. Relational databases are the oldest databases that exist, they originate from the 1960's. In relational databases the data is stored on 'tables' which is a collection of 'rows' which are each uniquely identified. We have been learning how to communicate with Relational Databases via SQL, which stands for Structured Query Language. In short, a relational database is the storing of the data, and then we use a query language such as SQL to do things with that data, like combine tables, run math, logic, ect. SQL is great for pulling data into an API and using it for we applications with libraries such a Knex.

2. Why do tables need a Primary Key? Primary keys exist to uniquely identify every row of data in a given table. There must be something that is unique to every row, and that is the primary key. 

3. What is the name given to a table column that references the Primary Key on another table? A foreign key column. 

4. What do we need in order to have a _many to many_ relationship between two tables? If we have 20 animals overall among 2 tables, 1 table containing 10 dogs and the other table containing 10 cats, that is many to many. We have many animals and many cats and dogs. We use an intermediary table that uses a foreign key to connect the tables together via a primary key. 
