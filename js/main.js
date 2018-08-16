var app=angular.module("sentiment",["ngRoute"]);
app.config(function($routeProvider){
 //console.log("adjk")   
 $routeProvider.when("/home",{
                    templateUrl:"pages/intro.html",
                    //controller:'introCtrl'
                })
                .when("/",{
                    templateUrl:"pages/intro.html",
                    //controller: 'mod1Ctrl'
                })
                .when("/mod1",{
                    templateUrl:"pages/mod1.html",
                    controller: "mod1Ctrl"
                })
                .when("/mod2",{
                    templateUrl:"pages/mod2.html",
                    controller: 'mod2Ctrl'
                })
                .when("/mod3",{
                    templateUrl:"pages/mod3.html",
                    controller: 'mod3Ctrl'
                })
                .otherwise("/intro.html");
    
});

