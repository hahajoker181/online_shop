/**
 * Created by akiraff on 12/15/15.
 */
Template.dashboard_home.helpers({
   productCount: function() {
       return Products.find().count();
   }
});