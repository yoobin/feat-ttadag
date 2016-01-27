/**
 * @author yoobin
 * @since 2016. 1. 13.
 * @description
 */
(function() {
	angular.module('ngTtadagApp.spaceTaskList.taskListController')
		.controller('taskListController', ['$scope', '$routeParams', '$http', 'AccountService', '$location', function($scope, $routeParams, $http, AccountService, $location) {

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
				$scope.taskInfo = response.data.result;
				//$scope.cookiesInfoIsAuthorize = AccountService.getCookiesInfoIsAuthorize() != 'true' ? true : false;

			});


			$scope.settingChange = function() {
				if($scope.type === 'group') {
					$location.path('/space/' + $scope.type +'/setting/' + $scope.id);
				} else {
					alert('아직 준비중입니다.');
				}
			};

			$scope.unitClick = function(item) {
				console.log(item);
			};

			$scope.onChange = function(cbState) {
				console.log(cbState);
				$scope.message = cbState;
			};

			$scope.stateUdate = function(id) {
				$http({
					method : 'POST',
					url : 'http://192.168.0.201:8080/v2/tasks/update/status/' + id,
					headers : {
						'X-Auth-token' :AccountService.getCookiesInfoToken()
					}
				}).then(function successCallback(response) {
					console.log(response.data.result);
					//$scope.cookiesInfoIsAuthorize = AccountService.getCookiesInfoIsAuthorize() != 'true' ? true : false;

				});
			};
			$scope.moveSettingUrl = function(id) {
				$location.path('/space/taskEdit/' + id);
			};

		}]);
})();