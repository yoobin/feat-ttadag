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
				url : 'http://192.168.0.201:8080/v2/spaces/get/' + AccountService.getCookiesInfoUserId(),
				headers : {
					'X-Auth-token' :AccountService.getCookiesInfoToken()
				}
			}).then(function successCallback(response) {

				console.log(response);

			}, function errorCallback(response) {
				/**
				 * @description
				 * 아직 에러처리의 대한 문제대응은 없음.
				 */
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