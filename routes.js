'use strict';
angular.module('generalApp').
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/',
        {
            controller: 'treatmentsCtrl',
            templateUrl: 'partials/treatments.html'
        })
        .when('/campaigns',
        {
            controller: 'campaignsCtrl',
            templateUrl: 'partials/campaigns.html'
        })
    	.when('/how-it-works',
    	{
    		controller: 'hiworksCtrl',
    		templateUrl: 'partials/hiworks.html'
    	})
        .when('/login',
        {
            controller: 'loginCtrl',
            templateUrl: 'partials/login.html'
        })
        .when('/register',
        {
            controller: 'registerCtrl',
            templateUrl: 'partials/register.html'
        })
        .when('/waiting-request',
        {
            controller: 'requestCtrl',
            templateUrl: 'partials/waiting-request.html'
        })
        .when('/resend-code',
        {
            controller: 'requestCtrl',
            templateUrl: 'partials/resend-code.html'
        })
        .when('/checkout', 
        {
            controller: 'checkoutCtrl',
            templateUrl: 'partials/checkout.html'
        })
        .when('/selected-professor/:profid',
        {
            controller: 'checkoutCtrl',
            templateUrl: 'partials/selected-professor.html'
        })
        .otherwise({redirectTo: '/'});

        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
}]);