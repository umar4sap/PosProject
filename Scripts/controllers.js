'use strict';
(function () {
    
var appControl = angular.module('posapp');

appControl.controller('loginController',function($scope){

    $scope.userName="Username "
    $scope.passCode="$$$$$"

}) 


appControl.controller('home',['$scope','$window',function($scope,$window){

    $scope.openLogin=function(url){
    debugger;
    window.location.assign(url)
        
    }

}]) 
})();