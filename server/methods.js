Meteor.methods({
    new_client: function(attrs){
        CLIENTS.insert(attrs);
    },

    save_client: function(attrs, id){
        CLIENTS.update(id, attrs, { upsert: true });
    },

    delete_client: function(id){
        CLIENTS.remove(id);
    }
});
