Template.client_list.events({
    'click .delete': function(e){
        Meteor.call('delete_client', this._id);
    }
});

Template.project_list.events({
    'click .delete': function(e){
        Meteor.call('delete_project', this._id);
    }
});
