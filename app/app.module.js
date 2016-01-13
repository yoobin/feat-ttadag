(function(){
	'use strict';
/**
 * @description
 * AngularJS의존성 앱 init관련 부분설정
 * 1. 이부분에서 app을 관련된 데이터를 관리할수있는 싱글톤 객체가 필요할거같은데... 일단 고려
 * 2. 1번에서 싱긅톤 객체를 고려하여 로그인 회원관련 설정부분을 통신을 할수있는 객체를 마찬가지로 고려..
 * 3. 로그인 라이브러리 혹은 로직을 별도로 빼내어 최초 진입 할경우에만 라이브러리를 사용하고 그이외에는 checkAuth같은 개념으로 로그인을 항상
 * 체크 할수 있는 뭔가가 필요할듯함... 라이브러리자체는 factory 로 할지 service 로 할지.;;;
 * 4. 위 사항을 고려하여 의존성을 설정....
 */


/**
 * @description
 * ttadagApp에서 전역으로 데이터나 current정보를 관리함 이름선언.
 */
angular.module('ngSharedServices',[]);

/**
 * @description
 * 각 페이지 모듈 dependency manage.... and define
 */
angular.module('ngTtadagApp.home.controller',[]);
angular.module('ngTtadagApp.account.signUp.controller',[]);
angular.module('ngTtadagApp.account.signIn.controller',[]);
angular.module('ngTtadagApp.spaceGroupList.spaceGroupListController', []);
angular.module('ngTtadagApp.spaceTaskList.spaceTaskListController', []);

/**
 * @description
 * ttadagApp에서 전역으로 데이터나 current정보를 관리함.
 */
angular.module('ngSharedServices')
	.service('NetworkService', function($rootScope) {

		return {
			yoobinEventClick : function() {
				$rootScope.$broadcast('sihyunChanged');
			}
		};

	})
	.factory('ServerInfo', function() {

		return {
			TESTPUBLICIP : 'http://192.168.0.201:8080'
		}
	});

/**
 * @description
 * 통합 모듈...
 * ttadagApp을 전체를 관리하며 제어함
 */
angular.module('ttadagApp',[
	'ngMaterial',
	'ngMessages',
	'ngRoute',
	'ngAnimate',
	'ngSharedServices',
	'ngTtadagApp.home.controller',
	'ngTtadagApp.account.signUp.controller',
	'ngTtadagApp.account.signIn.controller',
	'ngTtadagApp.spaceGroupList.spaceGroupListController',
	'ngTtadagApp.spaceTaskList.spaceTaskListController'
]);


/**
 * @description
 * 이하 개발정의...
 */

angular.module('ttadagApp')
	.controller('TtadagAppController', ['$scope', '$location', 'SignInFactory', 'NetworkService', function($scope, $location, SignInFactory, NetworkService) {

		$scope.$on('$routeChangeSuccess', function(next, current) {
			//angularjs route가 changed되면 이벤트 발생되는 구간..
			//아 일단 개발하기 간단하게라도 코드 리펙토링 조금씩하면서 해야겟다.; 일정의 압박이 걱정되는구나..;;
		});


	}])
	.directive('appHeader', function() {

		return {
			restrict: 'E',
			templateUrl: 'shared/header/headerView.html',
			replace: true,
			priority: 0,
			transclude: false,
			scope: true,
			controller: function($scope, $element, $attrs, $transclude, NetworkService) {

			},
			compile: function compile(tElement, tAttrs, transclude) {
				return {
					pre: function preLink(scope, iElement, iAttrs, controller) {
						console.log('header compile pre');
					},
					post: function postLink(scope, iElement, iAttrs, controller) {
						console.log('header compile post');
					}
				}
			},
			link: function postLink($scope, iElement, iAttrs) {
				console.log('header link!!');
			}
		};

	})
	.directive('appFooter', function() {

		return {
			restrict: 'E',

			/**
			 template: "<div> " +
			 "<md-button ng-click='openBottomSheet()'> " +
			 " 푸터 버튼 레이어 테스트하고 있어요.." +
			 " </md-button> " +
			 "</div>",
			 */
			template : '<div></div>',
			//templateUrl: 'directive.html',
			replace: true,
			priority: 0,
			transclude: false,
			scope: true,
			controller: function($scope, $element, $attrs, $transclude, $mdBottomSheet, NetworkService, $mdToast) {

				$scope.$on('sihyunChanged', function() {
					$mdBottomSheet.show({

						templateUrl : 'testSimple01.tmp.html',
						controller : 'testPOP'
					}).then(function() {

						$mdBottomSheet.show({
							templateUrl : 'testSimple02.tmp.html',
							controller : 'testPOP'
						});
					});

				});

			},
			compile: function compile(tElement, tAttrs, transclude) {
				return {
					pre: function preLink(scope, iElement, iAttrs, controller) {
						console.log('footer compile pre');
					},
					post: function postLink(scope, iElement, iAttrs, controller) {
						console.log('footer compile post');
					}
				}
			},
			link: function postLink($scope, iElement, iAttrs) {
				console.log('footer link!!');
			}
		};


	})
	.controller('testPOP', function($scope, $mdBottomSheet) {

		$scope.listItemClick = function($index) {
			$mdBottomSheet.hide();
		};
	});

})();