/**
 * Created by akiraff on 12/14/15.
 */
Products = new Mongo.Collection("products");

Products.allow({
    insert: function () {
        return true;
    },

    update: function () {
        return true;
    },

    remove: function () {
        return true;
    }
});