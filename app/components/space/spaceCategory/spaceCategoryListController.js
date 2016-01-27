(function() {
	'use strict';
	angular.module('ngTtadagApp.spaceCategoryListController.categoryListController')
		.controller('categoryListController',['$scope', '$routeParams', '$http', '$location', 'AccountService', function($scope, $routeParams, $http, $location, AccountService) {
			//$routeParams.type
			//$routeParams.id
			var tmpObj = {},
				tmpArray = [];

			$scope.selected = [];




			$http({
				method : 'GET',
				url : 'http://192.168.0.201:8080/v2/tasks/list/category/' + $routeParams.id + '/' + $routeParams.type,
				headers : {
					'X-Auth-Token' : AccountService.getCookiesInfoToken()
				}
			}).then(function successCallback(response) {
				$scope.CategoryContent = response.data.result;


				$scope.toggle = function (item, list) {
					var idx = list.indexOf(item);
					if (idx > -1) list.splice(idx, 1);
					else list.push(item);
				};
				$scope.exists = function (item, list) {
					return list.indexOf(item) > -1;
				};



				$scope.selectedItemComplete = function() {

					//console.log($scope.selected);

					angular.forEach($scope.selected, function(id) {
						tmpObj.id = id;
						tmpArray.push(tmpObj);
					});

					$http({
						method : 'POST',
						url : 'http://192.168.0.201:8080/v2/groups/add/task/' + $routeParams.id,
						data : {
							id : $routeParams.id,
							tasks : tmpArray
						},
						headers : {
							'X-Auth-Token' : AccountService.getCookiesInfoToken()
						}
					}).then(function successCallback(response) {
						$location.path('space/taskList/group/' + $routeParams.id);
					});
				}
			});
		}]);
})();