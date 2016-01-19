/**
 * @description
 * 스페이스 추가...
 */
(function() {
	'use strict';
//ngTtadagApp.space.add.addSpaceController

	angular.module('ngTtadagApp.space.redemand.redemandController')
		.controller('redemandController', ['$scope', '$http','$location', 'AccountService', '$timeout', function($scope, $http, $location, AccountService, $timeout) {

			$scope.text = '재요청페이지 진입';

		}]);

})();