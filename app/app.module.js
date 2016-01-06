	'use strict';
	(function(){
		/**
 * @description AngularJS의존성 앱 init관련 부분설정
 * 1. 이부분에서 app을 관련된 데이터를 관리할수있는 싱글톤 객체가 필요할거같은데... 일단 고려
 * 2. 1번에서 싱긅톤 객체를 고려하여 로그인 회원관련 설정부분을 통신을 할수있는 객체를 마찬가지로 고려..
 * 3. 로그인 라이브러리 혹은 로직을 별도로 빼내어 최초 진입 할경우에만 라이브러리를 사용하고 그이외에는 checkAuth같은 개념으로 로그인을 항상
 * 체크 할수 있는 뭔가가 필요할듯함... 라이브러리자체는 factory 로 할지 service 로 할지.;;;
 * 4. 위 사항을 고려하여 의존성을 설정....
 */

/**
 * @description
 * 여기에 헤더
 */
angular.module('ngTtadagAppHeader', []);
angular.module('ngTtadagAppHeader')
	.service('headerService', function() {
		this.headerYoobin = 'yoobin with sihyun for header';
		return this;
	})
	.directive('appHeader', function() {
		console.log('angular module appHeader in execute...');
		return {
			restrict: 'E',
			template: '<div><a href="#/">최초</a> <a href="#/account/signIn">로그인</a> <a href="#/account/signUp">회원가입</a></div>',
			//templateUrl: 'directive.html',
			replace: true,
			priority: 0,
			transclude: false,
			scope: true,
			controller: function($scope, $element, $attrs, $transclude) {
				console.log("directive header Controller");
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


	});

/**
 * @description
 * 여기에 푸터
 */
angular.module('ngTtadagAppFooter', []);
angular.module('ngTtadagAppFooter')
	.service('footerService', function() {

		this.footerYoobin = 'yoobin with sihyun for footer';
		return this;
	})
	.directive('appFooter', function() {
		console.log('angular module footerService in execute...');
		return {
			restrict: 'E',

			/**
			template: "<div> " +
			"<md-button ng-click='openBottomSheet()'> " +
					" 푸터 버튼 레이어 테스트하고 있어요.." +
			" </md-button> " +
			"</div>",
			*/
			template : '<div>이곳이 레이어 팝업 뷰 보통때는 보이지 않거나 다른 레이아웃으로 대체됨.</div>',
			//templateUrl: 'directive.html',
			replace: true,
			priority: 0,
			transclude: false,
			scope: true,
			controller: function($scope, $element, $attrs, $transclude, $mdBottomSheet) {

				//.controller('MyController', function($scope, $mdBottomSheet) {
					$scope.openBottomSheet = function() {
						$mdBottomSheet.show({
							//template: '<md-bottom-sheet>Hel!!!!!lo!</md-bottom-sheet>'
							templateUrl : 'test.tmp.html'
						});
					};
				//})

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
	});


/**
 * @description
 * 각 페이지 모듈 dependency manage....
 */
angular.module('ngTtadagApp.home.controller',[]);
angular.module('ngTtadagApp.account.signUp.controller',[]);
angular.module('ngTtadagApp.account.signIn.controller',[]);

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
	'ngTtadagAppHeader',
	'ngTtadagAppFooter',
	'ngTtadagApp.home.controller',
	'ngTtadagApp.account.signUp.controller',
	'ngTtadagApp.account.signIn.controller'
]);
angular.module('ttadagApp')
	.controller('TtadagAppController', ['$scope', 'headerService', 'footerService', 'SignInFactory', function($scope, headerService, footerService, SignInFactory) {

		console.log('ttadagApp!!!');
		console.log(headerService);
		console.log(footerService);
		console.log(SignInFactory.yoobin);

		//$scope.openBottomSheet = function() {
		//	$mdBottomSheet.show({
		//		template: '<md-bottom-sheet>Hello!</md-bottom-sheet>'
		//	});
		//};


	}]);

})();