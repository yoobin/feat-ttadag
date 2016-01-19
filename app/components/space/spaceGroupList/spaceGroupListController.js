/**
 * @author yoobin
 * @since 2016. 1. 12.
 * @description
 */

(function() {
	'use strict';
	angular.module('ngTtadagApp.spaceGroupList.spaceGroupListController')
		.controller('spaceGroupListController', ['$scope', '$location', 'AccountService', function($scope, $location, AccountService) {

			console.log('스페이스 그룹 테스크 리스트 뷰 진입...');

			//console.log(AccountService.getCookiesInfoIsLogin());
			if (!AccountService.getCookiesInfoIsLogin()) {
				$location.path('/account/signIn');
			}


			$scope.spaceSetUrl = function() {
				$location.path('/space/taskList');
			};

		}]);

})();