/**
 * @description
 * 상단 헤더 일단 임시로 각각의 페이지뷰를 생성하면서 링크 연결 시켜줌...
 */
(function() {
	'use strict';
	angular.module('header')
		.controller('headerController', ['$scope', '$location', 'AccountService', function($scope, $location, AccountService) {
			//console.log($scope);
			//console.log(AccountService.getCookiesInfoIsLogin());
			$scope.headerEvent = function(type) {
				if (type === 'signIn') {

					$location.path('/account/signIn');

				} else if( type === 'signUp') {
					$location.path('/account/signUp');
				}
			}
		}]);
})();