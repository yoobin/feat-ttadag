/**
 * @author yoobin
 * @since 2016. 1. 12.
 * @description
 */

(function() {
	'use strict';
	angular.module('ngTtadagApp.spaceGroupList.spaceGroupListController')
		.controller('spaceGroupListController', ['$scope', '$location', 'AccountService', '$http', function($scope, $location, AccountService, $http) {

			$http({
				method : 'GET',
				url : 'http://192.168.0.201:8080/v2/spaces/',
				headers : {
					'X-Auth-token' :AccountService.getCookiesInfoToken()
				}
			}).then(function successCallback(response) {

				$scope.space = response.data.result.space;
				$scope.cookiesInfoIsAuthorize = AccountService.getCookiesInfoIsAuthorize() == 'true' ? true : false;

			});




			if (!AccountService.getCookiesInfoIsLogin()) {
				$location.path('/account/signIn');
			}


			$scope.spaceSetUrl = function() {
				$location.path('/space/taskList');
			};

		}]);

})();