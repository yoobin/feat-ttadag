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
					$location.path('/space/redemand');
				}
			};


			/**
			 * @description 스페이스가 없는 경우 버튼 키 요청
			 */

			/**
			 * 일단 api작업이 완료될때까지 보류...
			//console.log(AccountService.getCookesInfoBssId());
			//console.log(AccountService.getCookesInfoToken());
			$http({
				method : 'POST',
				url : 'http://192.168.0.4:8080/v2/button/authRequest/' + AccountService.getCookesInfoBssId(),
				data : {
					'X-Auth-Token' : AccountService.getCookesInfoToken()
				}
				//headers : {
				//	'X-Auth-Token' : AccountService.getCookesInfoToken()
				//}
			}).then(function successCallback(response) {

				//console.log(response);
				//if (!!response.data.result) {
				//
				//
				//} else {
				//
				//	alert(response.data.error.message);
				//
				//}
			});


			$http({
				method : 'POST',
				url : 'http://192.168.0.4:8080/v2/button/authPolling/ay172916s',
				data : {
					'X-Auth-Token' : AccountService.getCookesInfoToken()
				}
				//headers : {
				//	'X-Auth-Token' : '77c1b477-8375-4003-abd1-dc876490cb6c'
				//}
			}).then(function successCallback(response) {
				console.log(response)
			});

			*/
			if (!AccountService.getCookiesInfoIsLogin()) {
				$location.path('/account/signIn');
			} else {
				$timeout(buttonCount, 1000);
			}

		}]);

})();