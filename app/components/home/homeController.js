(function() {
	angular.module('ttadagApp.home.controller')
	.controller('homeController', ['$scope', function($scope) {
		console.log('homeController');
		$scope.yoobin = 'homeController';
	}]);
})();
