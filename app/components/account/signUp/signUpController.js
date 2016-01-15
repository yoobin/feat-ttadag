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

			//$scope.$watch('user.confirmPassword', function() {
			//
			//	console.log($scope.userForm.confirmPassword.$error.dontMatch = $scope.user.password !== $scope.user.confirmPassword);
			//
			//});


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
