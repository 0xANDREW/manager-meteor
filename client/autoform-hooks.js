AutoForm.hooks({
    client_form: {
        onSuccess: function(){
            Router.go('/clients');
        }
    },

    project_form: {
        onSuccess: function(){
            Router.go(_s.sprintf('/clients/%s/projects', this.updateDoc.$set.client_id));
        }
    }
});
