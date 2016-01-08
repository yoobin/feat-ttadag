(function() {
	angular.module('ngTtadagApp.account.signIn.controller')
		.controller('signInController', ['$scope', '$http', 'NetworkService', function($scope, $http, NetworkService) {

			$scope.loginAction = function() {
				//$scope.user.bssId = 'bssid';
			//
			var p =  {
				'id' : 'sih@hotamil.com',
				'password' : '1111',
				'bssId' : 'bssid'
			};
			//	////console.log($scope.user);
			//	$http({
			//		method : 'post',
			//		url : 'http://192.168.0.4:8080/user/login',
			//		data :p
			//	}).then(function successCallback(response) {
			//		console.log(response);
			//	}, function errorCallback(response) {
			//		console.log(response);
			//	});
			//


				//var url = 'http://192.168.0.201:8080/user/join&callback=JSON_CALLBACK';
				//var responsePromise = $http.jsonp(
				//		url,
				//
				//		{
				//			'id' : 'sih@hotamil.com',
				//			'password' : '1111',
				//			'bssId' : 'bssid'
				//		}
				//);
				//
				//responsePromise.success(function(data) {
				//	console.log(data);
				//	// do something with the returned JavaScript object
				//	// ( in the "data" parameter ).
				//});





				$http({
					url: 'http://192.168.0.4:8080/user/join',
					method: 'post',
					data: p,
					headers: {'Content-Type': 'application/json'}
				});





				//var url = "http://192.168.0.201:8080/user/login?callback=JSON_CALLBACK";
				//
				//$http.jsonp(url)
				//		.success(function(data){
				//			console.log(data.found);
				//		});



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
