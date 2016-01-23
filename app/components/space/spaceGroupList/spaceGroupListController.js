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
				url : 'http://192.168.0.4:8080/v2/spaces/',
				headers : {
					'X-Auth-token' :AccountService.getCookiesInfoToken()
				}
			}).then(function successCallback(response) {

				$scope.space = response.data.result.space;
				$scope.cookiesInfoIsAuthorize = AccountService.getCookiesInfoIsAuthorize() != 'true' ? true : false;

			});

			if (!AccountService.getCookiesInfoIsLogin()) {
				$location.path('/account/signIn');
			}


			$scope.spaceSetUrl = function() {
				//$location.path('/space/taskList');
				alert('스페이스 환경설정 이동');
			};
			$scope.groupSetUrl = function(title) {
				alert(title + '그룹 환경설정');
			};
			$scope.spaceTaskListLocation = function(id, type) {
				console.log(id, type);
				$location.path('/space/taskList/' + type + '/' + id);
				alert('스페이스 데스크 리스트 이동');
			};
			$scope.spaceGroupTaskListLocation = function(id, type) {
				$location.path('/space/taskList/' + type + '/' + id);
				alert('스페이스 그룹 테스크 리스트 이동')
			};

		}]);

})();