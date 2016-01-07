(function() {
	angular.module('ngTtadagApp.account.signIn.controller')
		.controller('signInController', ['$scope', 'NetworkService', function($scope, NetworkService) {

			$scope.yoobin = 'signInController';
			$scope.popTest = function() {
				NetworkService.yoobinEventClick();
			};

		}])
		.factory('SignInFactory', [function() {
			return {
				yoobin : 'factory test....'
			}
		}]);
})();
