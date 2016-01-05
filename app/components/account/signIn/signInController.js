(function() {
	angular.module('ttadagApp.account.signIn.controller')
		.controller('signInController', ['$scope', function($scope) {
			console.log('signInController');
			$scope.yoobin = 'signInController';
		}])
		.config(function($mdThemingProvider) {

			// Configure a dark theme with primary foreground yellow

			$mdThemingProvider.theme('docs-dark', 'default')
			.primaryPalette('yellow')
			.dark();

		});
})();
