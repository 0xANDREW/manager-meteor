Meteor.publish('clients', function(){
    return CLIENTS.find();
});

Meteor.publish('projects', function(client_id){
    return PROJECTS.find({ client_id: client_id });
});

Meteor.publish('tasks', function(project_id){
    return TASKS.find({ project_id: project_id });
});
