(function() {
	angular.module('ngTtadagApp.account.signIn.controller')
		.controller('signInController', ['$scope', 'NetworkService', 'AccountService', '$location',function($scope, NetworkService, AccountService, $location) {

			if (AccountService.getCookiesInfoIsLogin()) {
				$location.path('space/groupList');
			}

			$scope.loginAction = function() {

				//console.log($scope.user.email);
				//console.log($scope.user.password);

			};

			$scope.signInAction = function() {
				AccountService.signIn($scope.user.email, $scope.user.password);
			};


			$scope.resetPassword = function() {
				console.log(AccountService.getUser());
				alert('비밀번호를 변경할 수 있도록 메일로 보냈습니다.');
			};
			/**

			$scope.resetPassword1 = function() {
				console.log(AccountService.getIsAuthorize());
			};

			$scope.resetPassword2 = function() {
				console.log(AccountService.getToken());
			};

			*/

			$scope.FBLogin = function() {
				alert('추후 연동예정');
			};

		}]);
})();
