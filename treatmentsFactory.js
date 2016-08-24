'use strict';
angular.module('generalApp').
factory('treatmentsData', function(){

	var factory = {};

	var carouselimages = [
		{imgname: '601.png', imgalt: 'description'},
		{imgname: '602.png', imgalt: 'description'},
		{imgname: '603.png', imgalt: 'description'},
		{imgname: '604.png', imgalt: 'description'},
	];

	factory.getImages = function(){
		return carouselimages;
	}

	return factory;
});