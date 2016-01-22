/**
 * @author yoobin
 * @since 2016. 1. 13.
 * @description
 */
(function() {
	angular.module('ngTtadagApp.spaceTaskList.spaceTaskListController')
		.controller('spaceTaskListController', ['$scope', '$location', 'AccountService' ,function($scope, $location, AccountService) {

			$scope.text = '스페이스 그룹 테스크 리스트 페이지 진입...';

		}]);
})();
