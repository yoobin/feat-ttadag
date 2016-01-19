/**
 * @description 모든 라우트 지정 및 설정
 */

angular.module('ttadagApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				controller : 'homeController as yoobin',
				templateUrl : 'components/home/homeView.html'
			})
			.when('/account/signUp', {
				controller : 'signUpController',
				templateUrl : 'components/account/signUp/signUpView.html'
			})
			.when('/account/signIn', {
				controller : 'signInController',
				templateUrl : 'components/account/signIn/signInView.html'
			})
			.when('/space/groupList', {
				controller : 'spaceGroupListController',
				templateUrl : 'components/space/spaceGroupList/spaceGroupListView.html'
			})
			.when('/space/taskList', {
				controller : 'spaceTaskListController',
				templateUrl : 'components/space/spaceTaskList/spaceTaskListView.html'
			})
			.when('/space/add', {
				controller : 'addController',
				templateUrl : 'components/space/add/addView.html'
			})
			.when('/space/redemand', {
				controller : 'redemandController',
				templateUrl : 'components/space/redemand/redemandView.html'
			});

	}]);