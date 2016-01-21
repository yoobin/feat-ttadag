/**
 * @author yoobin
 * @since 2016. 1. 12.
 * @description
 */

(function() {
	'use strict';
	angular.module('ngTtadagApp.spaceGroupList.spaceGroupListController')
		.controller('spaceGroupListController', ['$scope', '$location', 'AccountService', '$http', function($scope, $location, AccountService, $http) {


			console.log(AccountService.getCookiesInfoUserEmail());

			$http({
				method : 'GET',
				url : 'http://192.168.0.201:8080/v2/spaces/',
				headers : {
					'X-Auth-token' :AccountService.getCookiesInfoToken()
				}
			}).then(function successCallback(response) {

				console.log(response);

			});




			if (!AccountService.getCookiesInfoIsLogin()) {
				$location.path('/account/signIn');
			}


			$scope.spaceSetUrl = function() {
				$location.path('/space/taskList');
			};

		}]);

})();