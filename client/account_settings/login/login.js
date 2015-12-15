/**
 * Created by akiraff on 12/13/15.
 */
Template.login.events({
    'click .login': function(e) {
        e.preventDefault();
        var userVar = $("#loginUsername").val();
        var passwordVar = $("#loginPassword").val();
        Meteor.loginWithPassword(userVar, passwordVar);
    }
});

Template.login.helpers({
   'redirect': function() {
       FlowRouter.go('/');
   }
});