/**
 * @description 모든 라우트 지정 및 설정
 */

angular.module('ttadagApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				controller : 'homeController',
				templateUrl : 'components/home/homeView.html'
			});

	}]);