AutoForm.hooks({
    client_form: {
        onSuccess: function(){
            Router.go('/clients');
        }
    }
});
