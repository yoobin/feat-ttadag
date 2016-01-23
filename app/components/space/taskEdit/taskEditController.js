(function() {
	angular.module('ngTtadagApp.spaceEditList.taskEditController')
		.controller('taskEditController', ['$scope', '$routeParams', function($scope, $routeParams) {
			console.log($routeParams.id);
			console.log($scope)
		}]);
})();