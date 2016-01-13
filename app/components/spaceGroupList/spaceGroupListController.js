/**
 * @author yoobin
 * @since 2016. 1. 12.
 * @description
 */

(function() {
	'use strict';
	angular.module('ngTtadagApp.spaceGroupList.spaceGroupListController')
		.controller('spaceGroupListController', ['$scope', '$location',function($scope, $location, $http) {

			/**
			 $http({
				method : 'POST',
				url : 'http://192.168.0.201:8080/user/join',
				data : {

				}
			}).then(function successCallback(response) {
				console.log(response);
			}, function errorCallback(response) {
				console.log(response);
			});
			 */

			$scope.spaceSetUrl = function() {
				$location.path('/space/taskList');
			};

		}]);

})();