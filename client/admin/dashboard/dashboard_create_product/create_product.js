/**
 * Created by akiraff on 12/14/15.
 */
Template.create_product.events({
    'click .createProduct': function (e) {
        e.preventDefault();

        //Insert into products collection
        Products.insert({
            productName: $("#product_name").val(),
            productPrice: $("#price").val(),
            productQuantity: $("#quantity").val(),
            createdAt: new Date()
        });
        console.log('inserted');
    }
});