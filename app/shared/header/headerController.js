/**
 * @description
 * 상단 헤더 일단 임시로 각각의 페이지뷰를 생성하면서 링크 연결 시켜줌...
 */
(function() {
	'use strict';
	angular.module('header')
		.controller('headerController', ['$scope', '$location', 'AccountService', '$window', function($scope, $location, AccountService, $window) {
			$scope.template = {};

			$scope.$on('$routeChangeSuccess', function(next, current) {

				if (($location.path() === '/account/signIn') || ($location.path() === '/account/signUp')) {
					$scope.headerStyle = {'text-align': 'center','background-color':'#252032','height':'80px'};
					$scope.template.url = 'header01.html';
					$scope.headerEvent = function(type) {
						if (type === 'signIn') {

							$location.path('/account/signIn');

						} else if( type === 'signUp') {
							$location.path('/account/signUp');
						}
					}
				} else if (($location.path() === '/space/add') || ($location.path() === '/space/redemand')) {

					$scope.headerStyle = {};
					$scope.template.url = 'header03.html';
				} else if($location.path().indexOf('/space/groupSetting') >= 0) {
					$scope.headerStyle = {'text-align': 'center', 'background-color': '#473B30'};
					$scope.historyBack = function() {
						$window.history.back();
					};
					$scope.template.url = 'header04.html';
				} else {

					$scope.name = AccountService.getCookiesInfoUserNickname();
					$scope.headerStyle = {'text-align': 'center', 'background-color': '#473B30'};
					$scope.historyBack = function() {
						$window.history.back();
					};
					$scope.template.url = 'header02.html';

				}




			});
			//console.log($scope);
			//console.log(AccountService.getCookiesInfoIsLogin());

		}]);
})();