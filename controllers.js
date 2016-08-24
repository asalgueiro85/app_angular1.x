'use strict';
angular.module('generalApp').
controller('generalCtrl', ['$scope', function($scope){
    
    /*$.material.options = {
        "withRipples": ".btn:not(.btn-link), .card-image, .navbar a:not(.withoutripple), .nav-tabs a:not(.withoutripple), .withripple",
        "inputElements": "input.form-control, textarea.form-control, select.form-control",
        "checkboxElements": ".checkbox > label > input[type=checkbox]",
        "radioElements": ".radio > label > input[type=radio]"
    } */   
    $.material.init();

    $scope.mainMenuDropdown = [
        {name: 'Login', url:'login', identify: 'login'},
        {name: 'Register', url:'register', identify: 'register'}
    ]

    var mCarouselTO = setTimeout(function(){
        angular.element('#myCarousel').carousel({
            interval: 5000,
            cycle: true,
        }).trigger('slide');
    }, 2000);
    var q = mCarouselTO;

    $scope.slide = function (dir) {
        angular.element('#myCarousel').carousel(dir);
    };

    angular.element('.dropdown').on('show.bs.dropdown', function (e) {
        angular.element('#caretmenu').removeClass('hidden');
        angular.element('#dropdownMenu1').addClass('dropdown-open');
    });

    angular.element('.dropdown').on('hide.bs.dropdown', function (e) {
        angular.element('#caretmenu').addClass('hidden');
        angular.element('#dropdownMenu1').removeClass('dropdown-open');
    });

    $scope.hideElementbySelector = function(selector, id) {
        angular.element(selector+id).addClass('hidden');
    };

    $scope.showElementbySelector = function(selector, id) {
        angular.element(selector+id).removeClass('hidden');
    };

    $scope.hideElement = function(selector) {
        angular.element(selector).addClass('hidden');
    };

    $scope.showElement = function(selector) {
        angular.element(selector).removeClass('hidden');
    };
}])
.controller('treatmentsCtrl', ['$scope', 'treatmentsData', function($scope, treatmentsData){
    angular.element('#main-menu li').removeClass('active');
    angular.element('.treatments').addClass('active');

    /* this must be change to a directive */
    var swiper = new Swiper('.swiper-small', {
        slidesPerView: 3,
        spaceBetween: 5,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 5
            }
        }
    });

    $scope.carouselData = treatmentsData.getImages();
}])

.controller('campaignsCtrl', ['$scope', 'campaignsData', function($scope, campaignsData){
    
    angular.element('#main-menu li').removeClass('active');
    angular.element('.campaigns').addClass('active');

    $scope.carouselData = campaignsData.getCarousel();

    /* this must be change to a directive */
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 5,
        breakpoints: {
            1024: {
                slidesPerView: 5,
                spaceBetween: 5
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 5
            },
            640: {
                slidesPerView: 5,
                spaceBetween: 5
            },
            360: {
                slidesPerView: 2,
                spaceBetween: 5
            },            
            320: {
                slidesPerView: 2,
                spaceBetween: 5
            }
        }
    });

    /* this must be change to a directive */
    var swiper = new Swiper('.swiper-small', {
        slidesPerView: 3,
        spaceBetween: 5,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 5
            }
        }
    });

    angular.element('#showimages').addClass('hidden');
    $scope.imageVideo = function(showdiv, hiddendiv) {
        angular.element('#'+showdiv).removeClass('hidden');
        angular.element('#'+hiddendiv).addClass('hidden');
    }
}])

.controller('hiworksCtrl', ['$scope', function($scope){
    
    angular.element('#main-menu li').removeClass('active');
    angular.element('.hiworks').addClass('active');
}])
.controller('loginCtrl', ['$scope', function($scope){
    
    angular.element('#main-menu li').removeClass('active');
    angular.element('.login').addClass('active');

    $scope.login = [];

    $scope.login ={
        error:'Credentials error!'
    }
}])
.controller('registerCtrl', ['$scope', function($scope){
    
    angular.element('#main-menu li').removeClass('active');
    angular.element('.register').addClass('active');

    $scope.register = [];
}])
.controller('requestCtrl', ['$scope', function($scope){
    
    angular.element('#main-menu li').removeClass('active');
    $scope.showMessage = true;
    $scope.request = [];
    $scope.request ={
        error:'Code error!'
    }

    //assign false to showMessage variable if code doesn't match
    if ($scope.request.error != "") {
        $scope.showMessage = false;
        console.log($scope.showMessage);
    }

    $scope.resend =[];
}])
.controller('checkoutCtrl', ['$scope', '$route', 'checkoutData', '$location', function($scope, $route, checkoutData, $location){
    
    angular.element('#main-menu li').removeClass('active');
    
    $scope.professorid = '';
    $scope.biography = '';
    
    $scope.selectedprofid = '';
    $scope.fullProfile = {};

    var init = function () {
        $scope.$route = $route;
        $scope.selectedprofid = $scope.$route.current.params.profid;

        if ($scope.selectedprofid) {
            $scope.fullProfile = checkoutData.getProfile($scope.selectedprofid);   
        }
    };
    init();

    $scope.doctorsData = checkoutData.getDoctors();
    
    $scope.showSelect = function(id){
        angular.element('#id'+id).addClass('bsh-2-05');
        angular.element('.show-'+id).removeClass('hidden');
    };

    $scope.hideSelect = function(id){
        angular.element('#id'+id).removeClass('bsh-2-05');
        angular.element('.show-'+id).addClass('hidden');
    };

    $scope.setProfData = function(id, profbiography){
        $scope.professorid = id;
        $scope.biography = profbiography;
    }

    $scope.changeToProfile = function(profid, index){
        //Close which opened
        angular.element('.closedefault').addClass('hidden');
        angular.element('.opendefault').removeClass('hidden');

        angular.element('#idprofile'+profid).removeClass('hidden');
        angular.element('#profile'+index).removeClass('hidden');
        angular.element('#id'+profid).addClass('hidden');
    };

    $scope.selectProfessor = function(id){
        var routeview = '/selected-professor/'+id;
        $location.path(routeview);
    }

    $scope.unselectProfessor = function(){
        var routeview = '/checkout';
        $location.path(routeview);
    }
}]);