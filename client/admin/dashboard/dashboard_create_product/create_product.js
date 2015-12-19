/**Created by akiraff on 12/14/15.*/

Template.create_product.events({
    'submit .createProduct': function (e) {
        var getProductName = e.target.productName.value;
        var getProductPrice = e.target.productPrice.value;
        var getProductQuantity = e.target.productQuantity.value;

        Products.insert({
            productName: getProductName,
            productPrice: getProductPrice,
            productQuantity: getProductQuantity,
            createdAt: new Date()
        });

        FlowRouter.go("/dashboard/show_all_products");
        e.preventDefault();
    }
});