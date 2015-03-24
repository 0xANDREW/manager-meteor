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
