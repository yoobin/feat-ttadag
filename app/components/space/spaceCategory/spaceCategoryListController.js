(function() {
	'use strict';
	angular.module('ngTtadagApp.spaceCategoryListController.categoryListController')
		.controller('categoryListController',['$scope', '$routeParams', '$http', 'AccountService', function($scope, $routeParams, $http, AccountService) {
			//$routeParams.type
			//$routeParams.id

			$http({
				method : 'GET',
				url : 'http://192.168.0.201:8080/v2/tasks/list/category/' + $routeParams.id + '/' + $routeParams.type,
				headers : {
					'X-Auth-Token' : AccountService.getCookiesInfoToken()
				}
			}).then(function successCallback(response) {
				$scope.CategoryContent = response.data.result;


				$scope.selectedItem = function() {

				}
			});
		}]);
})();