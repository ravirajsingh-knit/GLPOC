angular.module("app").config(function($routeProvider){
 $routeProvider.when("/home",{
                    template:"<h1>Welcome to Angular POC</h1>",
                    //controller:'introCtrl'
                })
                .when("/",{
                    template:"<h1>Welcome to Angular POC</h1>",
                    //controller: 'mod1Ctrl'
                })
                .when("/mod1",{
                    template:"<mod1-display></mod1-display>",
                })
                .when("/mod2",{
                    template:"<mod2-display></mod2-display>",
                })
                .when("/mod3",{
                    template:"<mod3-display></mod3-display>",
                })
                .otherwise("/");
    
});
