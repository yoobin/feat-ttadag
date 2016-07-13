(function() {
	angular.module('ngTtadagApp.home.controller')
	.controller('homeController', ['$scope','$location','$window','$timeout', 'AccountService', function($scope, $location, $window, $timeout, AccountService) {

		if (AccountService.getCookiesInfoIsLogin()) {
			$location.path('space/groupList');
		}

		$scope.count = 5;
		$scope.isAutoLogin = false;
		$scope.isWIFIAccess = false;
		$scope.etcCheck = false;
		//$scope.go = false;

		$scope.isLogin = AccountService.getCookiesInfoIsLogin();
		$scope.start = function() {
			$location.path('/space/groupList');
		};

		//if(!$scope.isLogin) {
		//	var loadingCount = function () {
		//
		//		if ($scope.count >= 1) {
		//			$timeout(loadingCount, 1000);
		//			$scope.count--;
		//
		//			if ($scope.count === 4) {
		//				$scope.isAutoLogin = true;
		//			} else if ($scope.count === 3) {
		//				$scope.isWIFIAccess = true;
		//			} else if ($scope.count === 2) {
		//				$scope.etcCheck = true;
		//			} else {
		//				$scope.go = true;
		//			}
		//		} else {
		//			$timeout.cancel(loadingCount);
		//		}
		//
		//
		//	};
		//	$timeout(loadingCount, 1000);
		//}


		$scope.signOut = function() {
			AccountService.removeCookiesInfo(function() {
				$window.location.reload();
			});
		};


	}]);
})();
