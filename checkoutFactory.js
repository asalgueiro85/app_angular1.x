'use strict';
angular.module('generalApp').
factory('checkoutData', function(){

	var factory = {};
	var selecteddoctor = {};

	var doctorsdata = [

		[
			{profileimg:'prof3.png', profid:'1', profimg: 'prof2.png', profname: 'Karl Marx', profdegree:'Prof.Dr.', speciality:'philosopher', biography:'1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'},
			{profileimg:'prof3.png', profid:'2', profimg: 'prof2.png', profname: 'Albert Einstein', profdegree:'Prof.Dr.', speciality:'physicist', biography:'2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'},
			{profileimg:'prof3.png', profid:'3', profimg: 'prof2.png', profname: 'Blaise Pascal', profdegree:'Prof.Dr.', speciality:'mathematical', biography:'4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'}
		],
      	[
      		{profileimg:'prof3.png', profid:'4', profimg: 'prof2.png', profname: 'Isaac Newton', profdegree:'Prof.Dr.', speciality:'physicist', biography:'3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'},
			{profileimg:'prof3.png', profid:'5', profimg: 'prof2.png', profname: 'Blaise Pascal', profdegree:'Prof.Dr.', speciality:'mathematical', biography:'4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'},
			{profileimg:'prof3.png', profid:'6', profimg: 'prof2.png', profname: 'Karl Marx', profdegree:'Prof.Dr.', speciality:'philosopher', biography:'1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'}
      	]
    ];

	factory.getProfile = function(id){

		/*Use var id for make a server request and fill "var selecteddoctor"*/

		selecteddoctor = {
			profileimg:'prof3.png', 
			profid:'1', 
			profimg: 'prof2.png', 
			profname: 'Karl Marx', 
			profdegree:'Prof.Dr.', 
			speciality:'philosopher', 
			biography:'111111111 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'
		};

		return selecteddoctor;
	}

	factory.getDoctors = function(){
		return doctorsdata;
	}

	return factory;
});