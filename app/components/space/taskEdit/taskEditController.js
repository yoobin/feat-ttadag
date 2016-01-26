(function() {
	angular.module('ngTtadagApp.spaceEditList.taskEditController')
		.controller('taskEditController', ['$scope', '$routeParams', '$http', 'AccountService', function($scope, $routeParams, $http, AccountService) {

			var i = 0;
			$scope.nodeNames = [];
			$scope.taskUnits = {};
			$scope.templates = {};
			$scope.template = {};

			$http({
				method : 'GET',
				url : 'http://192.168.0.201:8080/v2/tasks/get/' + $routeParams.id,
				headers : {
					'X-Auth-Token' : AccountService.getCookiesInfoToken()
				}
			}).then(function successCallback(response) {

				if (!!response.data.result) {
				//
					for(; i < response.data.result.taskUnits.length; i++) {
				//
						if(response.data.result.taskUnits[i].hasOwnProperty('ALARM')) {
							$scope.nodeNames.push('ALARM');
							$scope.taskUnits.ALARM = response.data.result.taskUnits[i].ALARM;
							$scope.templates.ALARM = 'ALARM.html';

						} else if(response.data.result.taskUnits[i].hasOwnProperty('LIGHT')) {
							$scope.nodeNames.push('LIGHT');
							$scope.taskUnits.LIGHT = response.data.result.taskUnits[i].LIGHT;
							$scope.templates.LIGHT = 'LIGHT.html';

						} else if(response.data.result.taskUnits[i].hasOwnProperty('SPEAKER')) {
							$scope.nodeNames.push('SPEAKER');
							$scope.taskUnits.SPEAKER = response.data.result.taskUnits[i].SPEAKER;
							$scope.templates.SPEAKER = 'SPEAKER.html';
						} else if(response.data.result.taskUnits[i].hasOwnProperty('BUTTON')) {
							$scope.taskUnits.BUTTON = response.data.result.taskUnits[i].BUTTON;

						}
					}

					$scope.template.url = $scope.templates[$scope.nodeNames[0]];
					$scope.nodeClick = function(nodeName) {
						$scope.template.url = $scope.templates[nodeName];
					};


					$scope.nodeClick1 = function() {
						console.log('1');
					};
					$scope.nodeClick2 = function() {
						console.log('2');
					};
					$scope.nodeClick3 = function() {
						console.log('3');
					};


				} else {
					alert(response.data.error.message);

				}

			});


		}]);
})();