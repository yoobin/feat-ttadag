(function() {
	'use strict';
	angular.module('ngTtadagApp.spaceGroupSetting.spaceGroupSettingController')
		.controller('spaceGroupSettingController',['$scope', '$routeParams', '$http', 'AccountService', function($scope, $routeParams, $http, AccountService) {

			$http({
				method: 'GET',
				url: AccountService.DevAPI_IP + '/v2/groups/get/' + $routeParams.id,
				headers: {
					'X-Auth-Token': AccountService.getCookiesInfoToken()
				}
			}).then(function successCallback(response) {
				$scope.alias = response.data.result.alias;
			});


			$scope.groupChangeName = function() {

				$http({
					method: 'POST',
					url: AccountService.DevAPI_IP + '/v2/groups/rename/' + $routeParams.id,
					data : {
						alias : $scope.alias
					},
					headers: {
						'X-Auth-Token': AccountService.getCookiesInfoToken()
					}
				}).then(function successCallback(response) {
					//$scope.alias = response.data.result.alias;
				});
			};
			$scope.groupRemove = function() {
				$http({
					method: 'GET',
					url: AccountService.DevAPI_IP + '/v2/groups/remove/' + $routeParams.id,
					headers: {
						'X-Auth-Token': AccountService.getCookiesInfoToken()
					}
				}).then(function successCallback(response) {
					//$scope.alias = response.data.result.alias;
				});
			};

		}]);
})();