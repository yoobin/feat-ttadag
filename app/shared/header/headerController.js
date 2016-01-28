/**
 * @description
 * 상단 헤더 일단 임시로 각각의 페이지뷰를 생성하면서 링크 연결 시켜줌...
 */
(function() {
	'use strict';
	angular.module('header')
		.controller('headerController', ['$scope', '$location', 'AccountService', function($scope, $location, AccountService) {
			$scope.template = {};

			$scope.$on('$routeChangeSuccess', function(next, current) {

				if (($location.path() !== '/account/signIn') && ($location.path() !== '/account/signUp')) {

					$scope.header01 = {'text-align': 'center','background-color':'#473B30'};
					$scope.template.url = 'header02.html';

				} else {

					$scope.header01 = {'text-align': 'center','background-color':'#252032'};
					$scope.template.url = 'header01.html';
					$scope.headerEvent = function(type) {
						if (type === 'signIn') {

							$location.path('/account/signIn');

						} else if( type === 'signUp') {
							$location.path('/account/signUp');
						}
					}
				}




			});
			//console.log($scope);
			//console.log(AccountService.getCookiesInfoIsLogin());

		}]);
})();