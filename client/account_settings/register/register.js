/**
 * Created by akiraff on 12/13/15.
 */
Template.register.events({
    'click .register': function (e) {
        e.preventDefault();
        var userVar = $("#registerUsername").val();
        var emailVar = $("#registerEmail").val();
        var passwordVar = $("#registerPassword").val();

        Accounts.createUser({
            username: userVar,
            email: emailVar,
            password: passwordVar
        });
    }
});
