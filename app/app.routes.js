/**
 * @description 모든 라우트 지정 및 설정
 */

angular.module('ttadagApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				controller : 'homeController as ctrl',
				templateUrl : 'components/home/homeView.html'
			})
			.when('/account/signUp', {
				controller : 'signUpController',
				templateUrl : 'components/account/signUp/signUpView.html'
			})
			.when('/account/signIn', {
				controller : 'signInController',
				templateUrl : 'components/account/signIn/signInView.html'
			});

	}]);