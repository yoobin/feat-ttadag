(function() {
	'use strict';
	angular.module('ngTtadagApp.spaceGroupSetting.spaceGroupSettingController')
		.controller('spaceGroupSettingController',['$scope', '$routeParams', '$http', 'AccountService', function($scope, $routeParams, $http, AccountService) {

			$http({
				method: 'GET',
				url: 'http://192.168.0.201:8080/v2/groups/get/' + $routeParams.id,
				headers: {
					'X-Auth-Token': AccountService.getCookiesInfoToken()
				}
			}).then(function successCallback(response) {
				$scope.alias = response.data.result.alias;
			});



		}]);
})();