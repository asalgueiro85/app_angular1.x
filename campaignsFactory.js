'use strict';
angular.module('generalApp').
factory('campaignsData', function(){

	var factory = {};

	var carouseldata = [
		{profimg: 'prof1.png', profname: 'Karl Marx', profdegree:'Prof.Dr.', speciality:'philosopher', biography:'1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'},
		{profimg: 'prof1.png', profname: 'Albert Einstein', profdegree:'Prof.Dr.', speciality:'physicist', biography:'2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'},
		{profimg: 'prof1.png', profname: 'Isaac Newton', profdegree:'Prof.Dr.', speciality:'physicist', biography:'3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'},
		{profimg: 'prof1.png', profname: 'Blaise Pascal', profdegree:'Prof.Dr.', speciality:'mathematical', biography:'4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'},
	];

	factory.getCarousel = function(){
		return carouseldata;
	}

	return factory;
});