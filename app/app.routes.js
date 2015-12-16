app.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/', {
			controller : 'homeController',
			template : '<h1>!!!</h1>'
		});

}]);