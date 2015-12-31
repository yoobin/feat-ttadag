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
//angular.module('appModule');

/**
 * @description
 */

/**
angular.module('header', [])
	.service('headerService', function() {
		this.title = 'header';
		this.header = function() {
			return this;
		}
	})
	//.controller('headerController', ['$scope', function($scope) {
	//	console.log('headerCont');
	//}])
	.directive('appHeader', function() {

		return {
			restrict : 'C',
			replace : false,
			template : '<h1 ng-click="headerClick();">{{TITLE}}</h1>',
			link : function($scope, $el, attr) {

				$scope.TITLE = 'TTADAG!!! INC';
				$scope.headerClick = function() {
					alert('headerClick!!!');
				}

			}
		}
	});
 */
//
///**
// * @description 모듈 형태의 메인 컨테이너..
// */
//angular.module('container', [])
////싱글턴 객체 반환
//	.service('containerService', function() {
//		this.title = 'container';
//		this.container = function() {
//			return this;
//		}
//	});
//
///**
//angular.module('footer', [])
//	.service('footer', function() {
//		this.title = 'footer';
//		this.footer = function() {
//			return this;
//		}
//	});
//*/
//
///**
// * @description 메인 app
// */
//var app = angular.module('ttadagApp', ['ngMaterial', 'ngRoute', 'container']);
////console.log(app);
////console.log(angular.module('ttadagApp'));
//app.controller('ttadagAppController', ['$scope', 'containerService', function($scope, containerService) {
//	console.log('ap!!!p!!');
//	//console.log(headerService.header().title);
//	//console.log(container.container().title);
//	//console.log(footer.footer().title);
//
//}]);
//

/**
 * @description
 * 여기에 헤더
 */
angular.module('header', []);
angular.module('header')
	.service('headerService', function() {
		this.headerYoobin = 'yoobin with sihyun for header';
		return this;
	})
	.directive('appHeader', function() {
		console.log('angular module in execute...');
		return {
			restrict: 'E',
			template: '<div>11111aaaaa</div>',
			//templateUrl: 'directive.html',
			replace: true,
			priority: 0,
			transclude: false,
			scope: false,
			terminal: false,
			require: false,
			controller: function($scope, $element, $attrs, $transclude) {
				console.log($scope);
				console.log("directive Controller");
			},
			compile: function compile(tElement, tAttrs, transclude) {
				return {
					pre: function preLink(scope, iElement, iAttrs, controller) {
						console.log('compile pre');
					},
					post: function postLink(scope, iElement, iAttrs, controller) {
						console.log('compile post');
					}
				}
			},
			link: function postLink(scope, iElement, iAttrs) {
				console.log('link!!');
			}
		};


	});


/**
 * @description
 * 여기에 컨테이너
 */
angular.module('containers', []);
angular.module('containers')
	.service('containersService', function() {

		this.containerYoobin = 'yoobin with sihyun for containers';
		return this;
	});
/**
 * @description
 * 여기에 푸터
 */
angular.module('footer', []);
angular.module('footer')
	.service('footerService', function() {

		this.footerYoobin = 'yoobin with sihyun for footer';
		return this;
	});


/**
 * @description
 * 통합 모듈...
 * ttadagApp을 전체를 관리하며 제어함
 */
angular.module('ttadagApp',['ngAnimate', 'header', 'containers', 'footer']);
angular.module('ttadagApp')
	.controller('ttadagAppController', ['$scope', 'headerService', 'containersService', 'footerService', function($scope, headerService, containersService, footerService) {
		console.log($scope);
		console.log(headerService);
		console.log(containersService);
		console.log(footerService);
	}]);
})();