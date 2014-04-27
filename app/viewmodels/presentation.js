define(['plugins/http', 'durandal/app', 'knockout','plugins/router'], function (http, app, ko,router) {
   
    var vm = {
        displayName: 'Presentator',
        playlists: ko.observableArray([]),
        activate: function () {
            return;
        },
        select: function (item) {
            ////the app model allows easy display of modal dialogs by passing a view model
            ////views are usually located by convention, but you an specify it as well with viewUrl
            //item.viewUrl = 'views/detail';
            //app.showDialog(item);
        },
        //canDeactivate: function () {
        //    //the router's activator calls this function to see if it can leave the screen
        //    return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        //},
        userName: ko.observable("").extend({ required: true }),
        password: ko.observable("").extend({ required: true }),
        login: login,
        register: register
    };


    function register() {
        console.log(router);
        router.navigate('#/register');
    }
    function login() {

    }

    //function login() {
    //    if (vm.validationErrors().length > 0) {
    //        vm.validationErrors.showAllMessages();
    //        return;
    //    }

    //    session.isBusy(true);

    //    security.login({
    //        grant_type: "password",
    //        username: vm.userName(),
    //        password: vm.password()
    //    }).done(function (data) {
    //        if (data.userName && data.access_token) {
    //            session.setUser(data, vm.rememberMe());
    //            router.navigate('#/', 'replace');
    //        } else {
    //            logger.log({
    //                message: "Error logging in.",
    //                data: "",
    //                showToast: true,
    //                type: "error"
    //            });
    //        }
    //    }).always(function () {
    //        vm.userName('');
    //        vm.password('');
    //        session.isBusy(false);
    //    }).failJSON(function (data) {
    //        if (data && data.error_description) {
    //            logger.log({
    //                message: "Error logging in.",
    //                data: data.error_description,
    //                showToast: true,
    //                type: "error"
    //            });
    //        } else {
    //            logger.log({
    //                message: "Error logging in.",
    //                data: "",
    //                showToast: true,
    //                type: "error"
    //            });
    //        }
    //    });
    //}


    return vm;
});