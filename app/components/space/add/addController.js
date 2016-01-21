/**
 * @description
 * 스페이스 추가...
 */
(function() {
	'use strict';
//ngTtadagApp.space.add.addSpaceController

	angular.module('ngTtadagApp.space.add.addController')
		.controller('addController', ['$scope', '$http','$location', 'AccountService', '$timeout', function($scope, $http, $location, AccountService, $timeout) {

			$scope.count = 30;


			var buttonCount = function() {


				if ($scope.count >= 1) {
					$timeout(buttonCount, 1000);
					$scope.count--;
				} else {
					$timeout.cancel(buttonCount);
					//재인증 페이지로 이동
					//$location.path('/space/redemand');
				}
			};

			/**
			 * @description 스페이스가 없는 경우 버튼 키 요청
			 */
			$http({
				method : 'GET',
				url : 'http://192.168.0.201:8080/v2/button/authRequest/' + AccountService.getCookesInfoBssId(),
				headers : {
					'X-Auth-Token' : AccountService.getCookesInfoToken()
				}
			}).then(function successCallback(response) {

				if (!!response.data.result) {

					$http({
						method : 'GET',
						url : 'http://192.168.0.201:8080/v2/button/authPolling/' + response.data.result.authKey,
						headers : {
							'X-Auth-Token' : AccountService.getCookesInfoToken()
						}
					}).then(function successCallback(response) {
						console.log(response)
					});


				} else {

					alert(response.data.error.message);

				}
			});



			if (!AccountService.getCookiesInfoIsLogin()) {
				$location.path('/account/signIn');
			} else {
				$timeout(buttonCount, 1000);
			}

		}]);

})();