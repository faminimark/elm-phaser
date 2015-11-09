
App.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {


    $routeProvider.
      when('/', {
        templateUrl: '../assets/partials/home.html',
        controller: 'inputCredCtrl',
        controllerAs: 'input'
      }).
      when('/guide', {
        templateUrl: '../assets/partials/guide.html',
        controller: 'GuideCtrl'
      }).
      when('/result', {
        templateUrl: '../assets/partials/thankyou.html',
        controller: ''
      }).
      when('/404',{
        templateUrl: '../assets/partials/404.html',
        controller: ''
      }).
      otherwise({
        redirectTo: '/404'
      });

  }]);