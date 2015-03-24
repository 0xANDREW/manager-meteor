Router.configure({
    layoutTemplate: 'wrapper'
});

Router.route('/', {
    template: 'index'
});

Router.route('/clients', {
    template: 'client_list',

    waitOn: function(){
        return Meteor.subscribe('clients');
    },

    data: function(){
        return { clients: CLIENTS.find({}) };
    }
});

Router.route('/clients/new', {
    template: 'client_form',

    data: function(){
        return { client: {}};
    }
});

Router.route('/clients/:id', {
    template: 'client_form',

    waitOn: function(){
        return Meteor.subscribe('clients');
    },

    data: function(){
        return { client: CLIENTS.findOne(this.params.id) };
    }
});

Router.route('/clients/:id/projects', {
    template: 'project_list',

    waitOn: function(){
        return [
            Meteor.subscribe('projects', this.params.id),
            Meteor.subscribe('clients')
        ];
    },

    data: function(){
        return {
            client: CLIENTS.findOne(this.params.id),
            projects: PROJECTS.find({ client_id: this.params.id })
        };
    }
});

Router.route('/clients/:id/projects/new', {
    template: 'project_form',

    waitOn: function(){
        return Meteor.subscribe('clients');
    },

    data: function(){
        var rv = {
            client: CLIENTS.findOne(this.params.id)
        };

        return rv;
    }
});

Router.route('/clients/:client_id/projects/:project_id', {
    template: 'project_form',

    waitOn: function(){
        return [
            Meteor.subscribe('clients'),
            Meteor.subscribe('projects', this.params.client_id)
        ];
    },

    data: function(){
        return {
            client: CLIENTS.findOne(this.params.client_id),
            project: PROJECTS.findOne(this.params.project_id)
        };
    }
});

Router.route('/clients/:client_id/projects/:project_id/tasks', {
    template: 'task_list',

    waitOn: function(){
        return [
            Meteor.subscribe('projects', this.params.client_id),
            Meteor.subscribe('tasks', this.params.project_id),
            Meteor.subscribe('clients')
        ];
    },

    data: function(){
        return {
            client: CLIENTS.findOne(this.params.client_id),
            project: PROJECTS.findOne({ client_id: this.params.client_id }),
            tasks: TASKS.find({ project_id: this.params.project_id })
        };
    }
});

Router.route('/clients/:client_id/projects/:project_id/tasks/new', {
    template: 'task_form',

    waitOn: function(){
        return Meteor.subscribe('projects');
    },

    data: function(){
        return {
            project: PROJECTS.findOne(this.params.project_id)
        };
    }
});

Router.route('/clients/:client_id/projects/:project_id/tasks/:task_id', {
    template: 'task_form',

    waitOn: function(){
        return [
            Meteor.subscribe('projects', this.params.client_id),
            Meteor.subscribe('tasks', this.params.project_id)
        ];
    },

    data: function(){
        return {
            project: PROJECTS.findOne(this.params.project_id),
            task: TASKS.findOne(this.params.task_id)
        };
    }
});
