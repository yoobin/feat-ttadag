(function() {
	angular.module('ngTtadagApp.spaceEditList.taskEditController')
		.controller('taskEditController', ['$scope', '$routeParams', '$http', 'AccountService', function($scope, $routeParams, $http, AccountService) {
			var i = 0;
			$scope.index = 0;
			$scope.id = $routeParams.id;
			$scope.nodes = [];

			$http({
				method : 'GET',
				url : 'http://192.168.0.201:8080/v2/tasks/get/' + $routeParams.id,
				headers : {
					'X-Auth-Token' : AccountService.getCookiesInfoToken()
				}
			}).then(function successCallback(response) {

				if (!!response.data.result) {

					for(; i < response.data.result.taskUnits.length; i++) {

						if(response.data.result.taskUnits[i].hasOwnProperty('ALARM')) {
							$scope.nodes.push('ALARM');
						} else if(response.data.result.taskUnits[i].hasOwnProperty('LIGHT')) {
							$scope.nodes.push('LIGHT');
						} else if(response.data.result.taskUnits[i].hasOwnProperty('SPEAKER')) {
							$scope.nodes.push('SPEAKER');
						} else if(response.data.result.taskUnits[i].hasOwnProperty('BUTTON')) {
							$scope.nodes.push('BUTTON');
						}
					}

					//console.log(response.data.result.taskUnits);
				} else {

					alert(response.data.error.message);

				}

			});


		}])
		.directive('nodeSettingSection', function() {
			return {
				restrict: 'E',
				//template : '<div></div>',
				//templateUrl: 'directive.html',
				replace: true,
				priority: 0,
				transclude: false,
				scope: true,
				controller: function($scope, $element, $attrs, $transclude, $mdBottomSheet, NetworkService, $mdToast) {

				}
			}
		});
})();