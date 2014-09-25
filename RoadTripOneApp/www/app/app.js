var serviceBase = 'http://roadtripplus.azurewebsites.net/';
app = angular.module('starter', ['ionic','LocalStorageModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'app/view/sign-in.html',
      controller: 'signInCtrl'
    })
	.state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'app/view/tabs.html'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'app/view/home.html',
          controller: 'HomeTabCtrl'
        }
      }
	});
	$urlRouterProvider.otherwise('/sign-in');
})

.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ManageMyRoadTripMobileLocal'
    //clientId: 'ManageMyRoadTripMobile'
})
.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
})

 .controller('SignInCtrla', function($scope, $state) {
  
   $scope.signIn = function(user) {
     console.log('Sign-In', user);
    $state.go('tabs.home');
 };
  
})