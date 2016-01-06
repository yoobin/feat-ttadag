(function() {
	angular.module('ngTtadagApp.home.controller')
	.controller('homeController', ['$scope', function($scope) {
		//console.log('homeController');
		//$scope.yoobin = 'homeController';
		this.userState = '';
		this.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
		'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
		'WY').split(' ').map(function (state) { return { abbrev: state }; });
	}]);
})();
