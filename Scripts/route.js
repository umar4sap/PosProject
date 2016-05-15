(function () {
    'use strict';

    var appRoute = angular.module('posapp');

    // Collect the routes
   debugger;
    appRoute.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    appRoute.config(['$routeProvider', '$locationProvider','routes', routeConfigurator]);
    function routeConfigurator($routeProvider,$locationProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });       
        $routeProvider.otherwise({ redirectTo: '/error', templateUrl: 'app/error/error.html' });
 /* $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});*/
    }

    // Define the routes 
    function getRoutes() {
        
        return [
            {
                url:'/',
                config: {
                    
                    templateURL: 'index.html',
                    controller:'home'
                   
                }
            },
            {
                url: '/login',
                config: {
                    title: 'topic',
                    templateUrl: 'templates/login-tmpl.html',
                     controller: 'loginController'
                }
            },
            {
                url: '/log2',
                config: {
                    title: 'start',
                    templateUrl: '../views/start.html'

                }
            },
            {
                url: '/home',
                config: {
                    title: 'home',
                    templateUrl:'../app/home/home.html'
                }
            },
            {
                url: '/error',
                config: {
                    title: 'error',
                    templateUrl: '../app/error/error.html'

                }
            }

        ];
    }
})();