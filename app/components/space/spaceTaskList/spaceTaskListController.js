/**
 * @author yoobin
 * @since 2016. 1. 13.
 * @description
 */
(function() {
	angular.module('ngTtadagApp.spaceTaskList.spaceTaskListController')
		.controller('spaceTaskListController', ['$scope', '$location', 'AccountService' ,function($scope, $location, AccountService) {

			$scope.text = '테스크 리스트 페이지 진입...';
			if (!AccountService.getIsLogin()) {
				$location.path('/account/signIn');
			}

		}]);
})();
