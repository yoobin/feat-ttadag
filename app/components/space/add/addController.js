/**
 * @description
 * 스페이스 추가...
 */
(function() {
	'use strict';
//ngTtadagApp.space.add.addSpaceController

	angular.module('ngTtadagApp.space.add.controller')
		.controller('addController', ['$scope', '$location', 'AccountService', '$timeout', function($scope, $location, AccountService, $timeout) {

			$scope.count = 30;
			

			var buttonCount = function() {

				if ($scope.count >= 1) {
					$scope.count--;
					$timeout(buttonCount, 1000);
				} else {
					$timeout.cancel(buttonCount);
					//재인증 페이지로 이동
					//$location.path('/account/signIn');
				}
			};


			if (!AccountService.getCookiesInfoIsLogin()) {
				$location.path('/account/signIn');
			} else {


				$timeout(buttonCount, 1000);
			}


			console.log('!!!!!');

		}]);

})();