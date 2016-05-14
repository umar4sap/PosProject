(function () {
    'use strict';
    
    var app = angular.module('posapp', [
        // Angular modules 
              // animations
        'ngRoute',          // routing
        //lazy loading while scrolling down.. 
         

    ]);
    
    // Handle routing errors and success events
    app.run(['$route',  function ($route) {
            // Include $route to kick start the router.
        }]);        
})();