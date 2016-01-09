(function() {
	angular.module('ngTtadagApp.account.signIn.controller')
		.controller('signInController', ['$scope', '$http', 'NetworkService', 'ServerInfo', function($scope, $http, NetworkService, ServerInfo) {

			$scope.loginAction = function() {
				//$scope.user.bssId = 'bssid';
			//
			var p =  {
				'id' : 'sihyun@hotmail.com',
				'password' : '11111',
				'bssId' : 'bssid'
			};
			//////console.log($scope.user);
			//$http({
			//	method : 'post',
			//	url : 'http://192.168.0.4:8080/user/login',
			//	data :p
			//}).then(function successCallback(response) {
			//	console.log(response);
			//}, function errorCallback(response) {
			//	console.log(response);
			//});


				$http.post(ServerInfo.TESTPUBLICIP + '/user/login', p)
					.success(function(response) {
						console.log(response);
					});
					//.then(function(response) {
					//	console.log(response.data.result);
					//});

			};

			$scope.resetPassword = function() {
				alert('비밀번호를 변경할 수 있도록 메일로 보냈습니다.');
			};

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
