/**
 * @description
 * 회원가입하기...
 */
(function() {
	angular.module('ngTtadagApp.account.signUp.controller')
		.controller('signUpController', ['$scope', '$http', '$location', 'AccountService',function($scope, $http, $location, AccountService) {

			$scope.user = {};
			$scope.user.isAcceptCheck = false;
			$scope.addAccount = function() {

				$http({
					method : 'POST',
					url : 'http://192.168.0.4:8080/v2/users/register',
					data : {
						email : $scope.user.email,
						password : $scope.user.password,
						nickname : $scope.user.nickName,
						bssId : AccountService.getCookiesInfoBssId()
					}
				}).then(function successCallback(response) {

					if (!!response.data.result) {

						$location.path('/account/signIn');

					} else {

						alert(response.data.error.message);

					}

				}, function errorCallback(response) {
					/**
					 * @description
					 * 아직 에러처리의 대한 문제대응은 없음.
					 */
					console.log(response);

				});

			};


		}])
		/**
		 * @description
		 * 이해가 지금 잘 안되는부분.. 일단 일정때문에 받아 들이고 넘어감..;;
		 */
		.directive('compareTo', function() {
			return {
				require : 'ngModel',
				scope : {
					otherModelValue : '=compareTo'
				},
				link : function(scope, el, attributes, ngModel) {

					ngModel.$validators.compareTo = function(modelValue) {

						return modelValue == scope.otherModelValue;

					};
				}
			}
		});
})();
