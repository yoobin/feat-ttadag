(function() {
	angular.module('ngTtadagApp.spaceEditList.taskEditController')
		.controller('taskEditController', ['$scope', '$routeParams', '$http', 'AccountService', function($scope, $routeParams, $http, AccountService) {
			$scope.index = 0;
			$scope.id = $routeParams.id;

			$http({
				method : 'GET',
				url : 'http://192.168.0.201:8080/v2/tasks/get/' + $routeParams.id,
				headers : {
					'X-Auth-Token' : AccountService.getCookiesInfoToken()
				}
			}).then(function successCallback(response) {

				if (!!response.data.result) {
					console.log(response);
				} else {
					alert(response.data.error.message);
				}

			});

			
		}]);
})();