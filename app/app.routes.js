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
				//회원가입
			.when('/account/signUp', {
				controller : 'signUpController',
				templateUrl : 'components/account/signUp/signUpView.html'
			})
				//로그인
			.when('/account/signIn', {
				controller : 'signInController',
				templateUrl : 'components/account/signIn/signInView.html'
			})
				//스페이스 그룹 리스트
			.when('/space/groupList', {
				controller : 'spaceGroupListController',
				templateUrl : 'components/space/spaceGroupList/spaceGroupListView.html'
			})
				//스페이스 그룹 설정
			.when('/space/groupSetting/:id', {
				controller : 'spaceGroupSettingController',
				templateUrl : 'components/space/spaceGroupSetting/spaceGroupSettingView.html'
			})
				//스페이스 테스크 리스트
			.when('/space/taskList/:type/:id', {
				controller : 'taskListController',
				templateUrl : 'components/space/taskList/taskListView.html'
			})
				//스페이스 버튼 인증 추가
			.when('/space/add', {
				controller : 'addController',
				templateUrl : 'components/space/add/addView.html'
			})
				//스페이스 버튼 인증 재요청
			.when('/space/redemand', {
				controller : 'redemandController',
				templateUrl : 'components/space/redemand/redemandView.html'
			})
			//스페이스 Task 리스트 편집
			.when('/space/taskEdit/:id', {
				controller : 'taskEditController',
				templateUrl : 'components/space/taskEdit/taskEditView.html'
			});

	}]);