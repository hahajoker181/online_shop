/**
 * Created by akiraff on 12/13/15.
 */
Template.navbar.events({
    'click .login-page': function (e) {
        FlowRouter.go('/login');
        e.preventDefault();
    },

    'click #logout': function (e) {
        Meteor.logout();
        FlowRouter.go('/');
        e.preventDefault();
    }
});

Template.navbar.helpers({
    account: function () {
        return Meteor.user().username;
    }
});