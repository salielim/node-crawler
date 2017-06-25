(function() {
    var MyApp = angular.module("MyApp", []);

    var MyCtrl = function() {
        var myCtrl = this;

        myCtrl.name = "";
        myCtrl.email = "";
        myCtrl.submit = function() {
               console.log("processing form for " + myCtrl.name);
         }
    };

    MyApp.controller("MyCtrl", MyCtrl);
})();