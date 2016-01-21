/**
 * @description
 * 스페이스 추가...
 */
(function() {
	'use strict';
//ngTtadagApp.space.add.addSpaceController

	angular.module('ngTtadagApp.space.redemand.redemandController')
		.controller('redemandController', ['$scope', '$http','$location', 'AccountService', '$timeout', function($scope, $http, $location, AccountService, $timeout) {


			if (AccountService.getCookesInfoIsAuthorize()) {

				$http({
					method: 'GET',
					url: 'http://192.168.0.201:8080/v2/button/authRequest/' + AccountService.getCookesInfoBssId(),
					headers: {
						'X-Auth-Token': AccountService.getCookesInfoToken()
					}
				}).then(function successCallback(response) {

					if (!!response.data.result) {
						var buttonCount = function () {


							var timecancel = $timeout(buttonCount, 1000);

							$http({
								method: 'GET',
								url: 'http://192.168.0.201:8080/v2/button/authPolling/' + response.data.result.authKey,
								headers: {
									'X-Auth-Token': AccountService.getCookesInfoToken()
								}
							}).then(function successCallback(response) {

								if (response.data.result.confirm) {
									$timeout.cancel(timecancel);
									$location.path('space/groupList');
								}
							});


							$scope.stopButtonAuth = function() {
								$timeout.cancel(timecancel);
								$location.path('space/groupList');
							};
						};

						$timeout(buttonCount, 1000);



					} else {
						alert(response.data.error.message);
					}
				});


			} else {

				$location.path('space/groupList');
			}

		}]);

})();