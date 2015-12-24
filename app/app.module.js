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

angular.module('container', [])
	.controller('controllerContainer',['$scope', function($scope) {
		console.log($scope, 'controllerContainer');
	}])
	.service('containerService', function() {
		this.title = 'container';
		this.container = function() {
			return this;
		}
	});

/**
angular.module('footer', [])
	.service('footer', function() {
		this.title = 'footer';
		this.footer = function() {
			return this;
		}
	});
*/

var app = angular.module('ttadagApp', ['ngMaterial', 'ngRoute', 'container']);
app.controller('ttadagAppController', ['$scope', 'containerService', function($scope, containerService) {
	console.log('app!!');
	//console.log(headerService.header().title);
	//console.log(container.container().title);
	//console.log(footer.footer().title);

}]);
