/**
 * @description
 * 회원가입하기...
 */
(function() {
	angular.module('ngTtadagApp.account.signUp.controller')
		.controller('signUpController', ['$scope', function($scope, $http) {

			$scope.user = {};
			$scope.user.isAcceptCheck = false;
			$scope.addAccount = function() {
				alert('계정추가');
			};

			/**
			$http({
				method : 'POST',
				url : 'http://192.168.0.4:8080/v2/users/register',
				data : {

				}
			}).then(function successCallback(response) {
				console.log(response);
			}, function errorCallback(response) {
				console.log(response);
			});
			*/
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
