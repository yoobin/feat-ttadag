/**
 * @author yoobin
 * @since 2016. 1. 12.
 * @description
 */

(function() {
	'use strict';
	angular.module('ngTtadagApp.spaceGroupList.spaceGroupListController')
		.controller('spaceGroupListController', ['$scope', '$location', 'AccountService', function($scope, $location, AccountService) {

			console.log(AccountService.getUser());
			console.log(AccountService.getIsAuthorize());
			console.log(AccountService.getToken());
			console.log(AccountService.getIsLogin());

			console.log('스페이스 그룹 테스크 리스트 뷰 진입...');

			if (!AccountService.getIsLogin()) {
				$location.path('/account/signIn');
			}


			$scope.spaceSetUrl = function() {
				$location.path('/space/taskList');
			};

		}]);

})();