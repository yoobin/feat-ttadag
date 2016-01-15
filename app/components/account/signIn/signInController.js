(function() {
	angular.module('ngTtadagApp.account.signIn.controller')
		.controller('signInController', ['$scope', '$http', 'NetworkService', 'ServerInfo', 'AuthInfoService', function($scope, $http, NetworkService, ServerInfo, AuthInfoService) {

			$scope.loginAction = function() {

				console.log($scope.user.email);
				console.log($scope.user.password);
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

				$http({
					method : 'POST',
					url : 'http://192.168.0.4:8080/v2/users/login',
					data : {
						email : $scope.user.email,
						password : $scope.user.password,
						bssId : '90:9f:33:66:48:36'

					}
				}).then(function successCallback(response) {


					if (!!response.data.result) {

						AuthInfoService.setAuthInfo(response.data.result.user);
						window.test = AuthInfoService.getAuthInfo();

					} else {

						alert(response.data.error.message);

					}

				}, function errorCallback(response) {
					/**
					 * @description
					 * 아직 에러처리의 대한 문제대응은 없음.

					console.log(response);
					 */
				});

			};

			$scope.resetPassword = function() {
				alert('비밀번호를 변경할 수 있도록 메일로 보냈습니다.');
			};

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
