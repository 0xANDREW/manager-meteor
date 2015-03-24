CLIENTS = new Mongo.Collection('clients');
PROJECTS = new Mongo.Collection('projects');
TASKS = new Mongo.Collection('tasks');
TASK_ENTRIES = new Mongo.Collection('task_entries');

var schemas = {};

schemas.task_entry = new SimpleSchema({
    task_id: { type: String },
    duration: { type: Number }
});

schemas.task = new SimpleSchema({
    name: { type: String },
    project_id: { type: String }
});

schemas.project = new SimpleSchema({
    name: { type: String },
    client_id: { type: String }
});

schemas.client = new SimpleSchema({
    name: { type: String },
    abbr: { type: String },
    address: { type: String },
    address2: { type: String, optional: true },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    phone: { type: String }
});

CLIENTS.attachSchema(schemas.client);
PROJECTS.attachSchema(schemas.project);
TASKS.attachSchema(schemas.tasks);
TASK_ENTRIES.attachSchema(schemas.task_entries);
