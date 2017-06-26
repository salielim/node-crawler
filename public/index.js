(function () {
    var SeobotApp = angular.module("SeobotApp", []);

    var SeobotCtrl = function () {
        var seobotCtrl = this;

        seobotCtrl.url = "";
        seobotCtrl.title = "";
        seobotCtrl.metaDescription = "";
        seobotCtrl.h1 = "";
        seobotCtrl.h2 = "";

        seobotCtrl.crawl = function () {
            console.log("Performing crawl for " + seobotCtrl.url);
        }
    };

    SeobotApp.controller("SeobotCtrl", SeobotCtrl);
})();