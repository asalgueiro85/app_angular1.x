'use strict';
angular.module('generalApp', ['ngRoute']).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});