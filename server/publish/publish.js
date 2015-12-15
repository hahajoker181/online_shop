/**
 * Created by akiraff on 12/14/15.
 */
Meteor.publish('show_products', function () {
   return Products.find();
});