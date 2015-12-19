/**
 * Created by akiraff on 12/14/15.
 */
Meteor.subscribe('show_products');

Template.show_all_products.helpers({
    products: function () {
        return Products.find({}, {sort: {createdAt: -1}});
    }
});

Template.show_all_products.events({
   "click #deleteBtn": function(e) {
       Products.remove({_id: this._id});
       e.preventDefault();
   }
});