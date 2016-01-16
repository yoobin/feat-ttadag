(function() {
	angular.module('ngTtadagApp.account.signIn.controller')
		.controller('signInController', ['$scope', 'NetworkService', 'ServerInfo', 'AccountService', function($scope, NetworkService, ServerInfo, AccountService) {

			$scope.loginAction = function() {

				//console.log($scope.user.email);
				//console.log($scope.user.password);
				/**
				var p =  {
					'id' : 'sihyun@hotmail.com',
					'password' : '11111',
					'bssId' : 'bssid'
				};

				$http.post(ServerInfo.TESTPUBLICIP + '/user/login', p)
					.success(function(response) {
						console.log(response);
					});
					//.then(function(response) {
					//	console.log(response.data.result);
					//});
				*/

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



			$scope.yoobin = 'signInController';
			$scope.FBLogin = function() {
				alert('추후 연동예정');
				//NetworkService.yoobinEventClick();
			};

		}])
		.factory('SignInFactory', [function() {
			return {
				yoobin : 'factory test....'
			}
		}]);
})();
