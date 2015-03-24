CLIENTS = new Mongo.Collection('clients');

var schemas = {};

schemas.task = new SimpleSchema({
    name: { type: String },
    duration: { type: Number }
});

schemas.project = new SimpleSchema({
    name: { type: String },
    tasks: { type: [ schemas.task ], optional: true }
});

schemas.client = new SimpleSchema({
    name: { type: String },
    abbr: { type: String },
    address: { type: String },
    address2: { type: String, optional: true },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    phone: { type: String },
    projects: { type: [ schemas.project ], optional: true }
});

CLIENTS.attachSchema(schemas.client);
