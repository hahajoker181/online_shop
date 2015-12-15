/**
 * Created by akiraff on 12/13/15.
 */

exposed = FlowRouter.group({});

exposed.route('/', {
    name: 'home',
    action: function () {
        BlazeLayout.render('layout1', {top: "navbar", bottom: "home_public"});
    }
});

exposed.route('/login', {
    name: 'login',
    action: function () {
        BlazeLayout.render('layout1', {top: "navbar", bottom: "login"});
    }
});

exposed.route('/register', {
    name: 'register',
    action: function () {
        BlazeLayout.render('layout1', {top: "navbar", bottom: "register"});
    }
});

exposed.route('/whats_hot', {
    name: 'whats_hot',
    action: function () {
        BlazeLayout.render('layout1', {top: "navbar", bottom: "whats_hot"});
    }
});

exposed.route('/new_releases', {
    name: 'new_releases',
    action: function () {
        BlazeLayout.render('layout1', {top: "navbar", bottom: "new_releases"});
    }
});

exposed.route('/about_us', {
    name: 'about_us',
    action: function () {
        BlazeLayout.render('layout1', {top: "navbar", bottom: "about_us"});
    }
});

exposed.route('/contact_us', {
    name: 'contact_us',
    action: function () {
        BlazeLayout.render('layout1', {top: "navbar", bottom: "contact_us"});
    }
});

//TODO: Add roles - admin
exposed.route('/dashboard', {
    name: 'dashboard_home',
    action: function () {
        BlazeLayout.render('layout1', {top: "navbar", bottom: "dashboard_home"});
    }
});

exposed.route('/dashboard/show_messages', {
   name: 'show_messages',
    action: function () {
        BlazeLayout.render('layout1', {top: "navbar", bottom: "show_messages"})
    }
});

exposed.route('/dashboard/create_product', {
    name: 'create_product',
    action: function () {
        BlazeLayout.render('layout1', {top: "navbar", bottom: "create_product"});
    }
});

exposed.route('/dashboard/pending_orders', {
    name: 'pending_orders',
    action: function () {
        BlazeLayout.render('layout1', {top: "navbar", bottom: "pending_orders"});
    }
});

exposed.route('/dashboard/show_all_products', {
    name: 'show_all_products',
    action: function () {
        BlazeLayout.render('layout1', {top: "navbar", bottom: "show_all_products"});
    }
});