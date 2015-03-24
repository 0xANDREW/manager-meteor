Meteor.publish('clients', function(){
    return CLIENTS.find({});
});
