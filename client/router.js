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
        return CLIENTS.find({});
    }
});

Router.route('/clients/new', {
    template: 'client_form'
});
