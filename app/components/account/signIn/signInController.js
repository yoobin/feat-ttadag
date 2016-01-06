(function() {
	angular.module('ngTtadagApp.account.signIn.controller')
		.controller('signInController', ['$scope', function($scope) {
			$scope.yoobin = 'signInController';
			$scope.popTest = function() {
				alert($scope.yoobin);
			}
		}])
		.factory('SignInFactory', [function() {
			return {
				yoobin : 'factory test....'
			}
		}]);
})();
