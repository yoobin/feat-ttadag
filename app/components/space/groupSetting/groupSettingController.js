(function() {
	'use strict';
	angular.module('ngTtadagApp.spaceGroupSetting.groupSettingController')
		.controller('groupSettingController',['$scope', '$routeParams', '$location', 'AccountService', '$http', function($scope, $routeParams, $location, AccountService, $http) {

			$scope.template = {};
			//$scope.template.url = 'taskAdd.html';

				$scope.tabEvent = function(type) {

				type = type || 'taskAdd';

				if(type === 'group') {

				} else if(type === 'taskAdd') {

					$http({
						method : 'GET',
						url : AccountService.DevAPI_IP + '/v2/categorys/list',
						headers : {
							'X-Auth-token' :AccountService.getCookiesInfoToken()
						}
					}).then(function successCallback(response) {

						$scope.categorys = response.data.result

					});

				} else {

				}

				$scope.template.url = type + '.html';

			};

			$scope.tabEvent();
			$scope.categoryLocation = function(category) {
				$location.path('/space/categoryList/' + category +'/' + $routeParams.id);
			}

		}]);
})();