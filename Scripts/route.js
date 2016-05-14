(function () {
    'use strict';

    var appRoute = angular.module('posapp');

    // Collect the routes
   
    appRoute.constant('routes', getRoutes());
    getRoutes();
    // Configure the routes and route resolvers
    appRoute.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });       
        $routeProvider.otherwise({ redirectTo: '/error', templateUrl: 'app/error/error.html' });

    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    title: 'Login',
                    templateUrl: '../templates/login-tmpl.html'
                }
            },
            {
                url: '/topic',
                config: {
                    title: 'topic',
                    templateUrl: '/app/topic/topic.html'
                }
            },
            {
                url: '/log',
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