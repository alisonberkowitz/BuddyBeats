define(['knockout'],
    function (ko) {
        var vm = {
            userName:ko.observable(""),
            password:ko.observable(""),
            confirmPassword:ko.observable(""),
            register:register
        };



        return vm;

        function register(){

        }
    }
);