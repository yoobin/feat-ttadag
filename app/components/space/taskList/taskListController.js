/**
 * @author yoobin
 * @since 2016. 1. 13.
 * @description
 */
(function() {
	angular.module('ngTtadagApp.spaceTaskList.taskListController')
		.controller('taskListController', ['$scope', '$routeParams', '$http', 'AccountService', function($scope, $routeParams, $http, AccountService) {

			//$scope.text = '스페이스 그룹 테스크 리스트 페이지 진입...';
			$scope.type = $routeParams.type;
			$scope.id = $routeParams.id;


			$http({
				method : 'GET',
				url : 'http://192.168.0.201:8080/v2/tasks/list/' + $scope.type + '/' + $scope.id,
				headers : {
					'X-Auth-token' :AccountService.getCookiesInfoToken()
				}
			}).then(function successCallback(response) {
				console.log(response);
				$scope.taskInfo = response.data.result;
				//$scope.cookiesInfoIsAuthorize = AccountService.getCookiesInfoIsAuthorize() != 'true' ? true : false;

			});

			$scope.unitClick = function(item) {
				console.log(item);
			}

		}]);
})();