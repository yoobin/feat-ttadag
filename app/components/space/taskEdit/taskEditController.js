(function() {
	angular.module('ngTtadagApp.spaceEditList.taskEditController')
		.controller('taskEditController', ['$scope', '$routeParams', '$http', 'AccountService', function($scope, $routeParams, $http, AccountService) {

			var i = 0;
			$scope.channelSelect = {};
			$scope.nodeNames = [];
			$scope.taskUnits = {};
			$scope.templates = {};
			$scope.template = {};
			$scope.week = ['S','M','T','W','T','F','S'];

			$http({
				method : 'GET',
				url : 'http://192.168.0.201:8080/v2/tasks/get/' + $routeParams.id,
				headers : {
					'X-Auth-Token' : AccountService.getCookiesInfoToken()
				}
			}).then(function successCallback(response) {

				if (!!response.data.result) {
					$scope.alias = response.data.result.alias;
					for(; i < response.data.result.taskUnits.length; i++) {
				//
						if(response.data.result.taskUnits[i].hasOwnProperty('ALARM')) {
							$scope.nodeNames.push('ALARM');
							$scope.taskUnits.ALARM = response.data.result.taskUnits[i].ALARM;
							$scope.templates.ALARM = 'ALARM.html';


							$scope.hours = [
								{value: '0', displayName: '0'},
								{value: '1', displayName: '1'},
								{value: '2', displayName: '2'},
								{value: '3', displayName: '3'},
								{value: '4', displayName: '4'},
								{value: '5', displayName: '5'},
								{value: '6', displayName: '6'},
								{value: '7', displayName: '7'},
								{value: '8', displayName: '8'},
								{value: '9', displayName: '9'},
								{value: '10', displayName: '10'},
								{value: '11', displayName: '11'},
								{value: '12', displayName: '12'},
								{value: '13', displayName: '13'},
								{value: '14', displayName: '14'},
								{value: '15', displayName: '15'},
								{value: '16', displayName: '16'},
								{value: '17', displayName: '17'},
								{value: '18', displayName: '18'},
								{value: '19', displayName: '19'},
								{value: '20', displayName: '20'},
								{value: '21', displayName: '21'},
								{value: '22', displayName: '22'},
								{value: '23', displayName: '23'}

							];
							$scope.minutes = [
								{value: '0', displayName: '0'},
								{value: '1', displayName: '1'},
								{value: '2', displayName: '2'},
								{value: '3', displayName: '3'},
								{value: '4', displayName: '4'},
								{value: '5', displayName: '5'},
								{value: '6', displayName: '6'},
								{value: '7', displayName: '7'},
								{value: '8', displayName: '8'},
								{value: '9', displayName: '9'},
								{value: '10', displayName: '10'},
								{value: '11', displayName: '11'},
								{value: '12', displayName: '12'},
								{value: '13', displayName: '13'},
								{value: '14', displayName: '14'},
								{value: '15', displayName: '15'},
								{value: '16', displayName: '16'},
								{value: '17', displayName: '17'},
								{value: '18', displayName: '18'},
								{value: '19', displayName: '19'},
								{value: '20', displayName: '20'},
								{value: '21', displayName: '21'},
								{value: '22', displayName: '22'},
								{value: '23', displayName: '23'},
								{value: '24', displayName: '24'},
								{value: '25', displayName: '25'},
								{value: '26', displayName: '26'},
								{value: '27', displayName: '27'},
								{value: '28', displayName: '28'},
								{value: '29', displayName: '29'},
								{value: '30', displayName: '30'},
								{value: '31', displayName: '31'},
								{value: '32', displayName: '32'},
								{value: '33', displayName: '33'},
								{value: '34', displayName: '34'},
								{value: '35', displayName: '35'},
								{value: '36', displayName: '36'},
								{value: '37', displayName: '37'},
								{value: '38', displayName: '38'},
								{value: '39', displayName: '39'},
								{value: '40', displayName: '40'},
								{value: '41', displayName: '41'},
								{value: '42', displayName: '42'},
								{value: '43', displayName: '43'},
								{value: '44', displayName: '44'},
								{value: '45', displayName: '45'},
								{value: '46', displayName: '46'},
								{value: '47', displayName: '47'},
								{value: '48', displayName: '48'},
								{value: '49', displayName: '49'},
								{value: '50', displayName: '50'},
								{value: '51', displayName: '51'},
								{value: '52', displayName: '52'},
								{value: '53', displayName: '53'},
								{value: '54', displayName: '54'},
								{value: '55', displayName: '55'},
								{value: '56', displayName: '56'},
								{value: '57', displayName: '57'},
								{value: '58', displayName: '58'},
								{value: '59', displayName: '59'}
							];

							$scope.weeksText = ['S','M','T','W','T','F','S'];
							$scope.items = ['0','1','2','3','4','5','6'];
							$scope.toggle = function (item, list) {
								var idx = list.indexOf(item);
								if (idx > -1) list.splice(idx, 1);
								else list.push(item);
							};

							$scope.exists = function (item, list) {
								return list.indexOf(item) > -1;
							};

						} else if(response.data.result.taskUnits[i].hasOwnProperty('LIGHT')) {
							$scope.nodeNames.push('LIGHT');
							$scope.taskUnits.LIGHT = response.data.result.taskUnits[i].LIGHT;
							$scope.templates.LIGHT = 'LIGHT.html';

							//console.log($scope.taskUnits.LIGHT.color);
							//$scope.colors = ['white', 'red', 'orange', 'blue', 'green', 'violet', 'yellow'];
							//$scope.rgbColors = {
							//	white : '255,255,255',
							//	red : '255,0,0',
							//	orange : '255,94,0',
							//	blue : '0,216,255',
							//	green : '29,219,22',
							//	violet : '255,0,221',
							//	yellow : '255,255,0'
							//
							//};
							//$scope.colorData = {
							//	color : 'Banana'
							//};
							$scope.setColor = function(colorId) {
								//console.log(colorId);
								$scope.taskUnits.LIGHT.color = colorId;
							};

						} else if(response.data.result.taskUnits[i].hasOwnProperty('SPEAKER')) {
							$scope.nodeNames.push('SPEAKER');
							$scope.taskUnits.SPEAKER = response.data.result.taskUnits[i].SPEAKER;
							$scope.taskUnits.SPEAKER.channels = response.data.result.channels;
							$scope.taskUnits.SPEAKER.channel = {};
							angular.forEach(response.data.result.channels, function(channel) {

								if(channel.use) {
									$scope.taskUnits.SPEAKER.channel = channel;
									$scope.channelSelect = channel;
								}

							});

							$scope.templates.SPEAKER = 'SPEAKER.html';


						} else if(response.data.result.taskUnits[i].hasOwnProperty('BUTTON')) {
							$scope.taskUnits.BUTTON = response.data.result.taskUnits[i].BUTTON;

						}
					}



					//이곳에서 기본 디폴트 템플릿설정..
					$scope.template.url = $scope.templates[$scope.nodeNames[0]];
					$scope.nodeClick = function(nodeName) {
						//상단 클릭경우 페이지 변경
						$scope.template.url = $scope.templates[nodeName];
					};

					$scope.channelSelected = function(selectedChannel) {

						angular.forEach($scope.taskUnits.SPEAKER.channels, function(channel) {

							if(selectedChannel === channel) {

								if(selectedChannel.use) {
									selectedChannel.use = false;
									$scope.channelSelect = {};
								} else {
									selectedChannel.use = true;
									$scope.channelSelect = selectedChannel;
								}

							} else {
								if(channel.use) {
									channel.use = false;
								}
							}


						});

					};


					$scope.taskEditsave = function() {
						$scope.taskUnits.id = $routeParams.id;

						//console.log($scope.taskUnits.LIGHT.color);
						//console.log($scope.taskUnits.ALARM);
						//console.log($scope.taskUnits.BUTTON);
						//console.log($scope.taskUnits.LIGHT);
						//console.log($scope.taskUnits.SPEAKER);
						//console.log($scope.taskUnits.id);
						var data = {
							id : $scope.taskUnits.id
						};

						if($scope.taskUnits.hasOwnProperty('ALARM')) {
							data.alarm = $scope.taskUnits.ALARM;
						}
						if ($scope.taskUnits.hasOwnProperty('BUTTON')){
							data.button = $scope.taskUnits.BUTTON;
						}
						if ($scope.taskUnits.hasOwnProperty('LIGHT')){
							data.light = $scope.taskUnits.LIGHT;
						}
						if ($scope.taskUnits.hasOwnProperty('SPEAKER')){
							data.speaker = $scope.taskUnits.SPEAKER;
							data.speaker.channel = $scope.channelSelect;
						}

						if(Object.keys(data.speaker.channel).length === 0) {
							alert('라디오 채널을 선택하셔야합니다.');
						} else {
							$http({
								method : 'POST',
								url : 'http://192.168.0.201:8080/v2/tasks/update/' + $routeParams.id,
								data : data,
								headers : {
									'X-Auth-Token' : AccountService.getCookiesInfoToken()
								}
							}).then(function successCallback(response) {
								console.log(response);
							});
						}
					};

					//taskUnits.LIGHT
					$scope.$watch('taskUnits.LIGHT.power', function(flag) {
						$http({
							method : 'POST',
							url : 'http://192.168.0.201:8080/v2/nodes/execute',
							data : {
								"bssid":AccountService.getCookiesInfoBssId(),
								"func":"power",
								"params":[flag],
								"action":"command"
							},
							headers : {
								'X-Auth-Token' : AccountService.getCookiesInfoToken()
							}
						}).then(function successCallback(response) {
							console.log(response);
						});
					});
					$scope.$watch('taskUnits.LIGHT.color', function(value) {
						$http({
							method : 'POST',
							url : 'http://192.168.0.201:8080/v2/nodes/execute',
							data : {
								"bssid":AccountService.getCookiesInfoBssId(),
								"func":"setColor",
								"params":value.split(','),
								"action":"command"
							},
							headers : {
								'X-Auth-Token' : AccountService.getCookiesInfoToken()
							}
						}).then(function successCallback(response) {
							console.log(response);
						});
					});
					$scope.$watch('taskUnits.LIGHT.intensity', function(value) {
						$http({
							method : 'POST',
							url : 'http://192.168.0.201:8080/v2/nodes/execute',
							data : {
								"bssid":AccountService.getCookiesInfoBssId(),
								"func":"setIntensity",
								"params":[value],
								"action":"command"
							},
							headers : {
								'X-Auth-Token' : AccountService.getCookiesInfoToken()
							}
						}).then(function successCallback(response) {
							console.log(response);
						});
					});

					//taskUnits.SPEAKER
					$scope.$watch('taskUnits.SPEAKER.power', function(flag) {
						$http({
							method : 'POST',
							url : 'http://192.168.0.201:8080/v2/nodes/execute',
							data : {
								"bssid":AccountService.getCookiesInfoBssId(),
								"func":"speakerPower",
								"params":[flag],
								"action":"command"
							},
							headers : {
								'X-Auth-Token' : AccountService.getCookiesInfoToken()
							}
						}).then(function successCallback(response) {
							console.log(response);
						});

					});
					$scope.$watch('taskUnits.SPEAKER.volume', function(value) {
						$http({
							method : 'POST',
							url : 'http://192.168.0.201:8080/v2/nodes/execute',
							data : {
								"bssid":AccountService.getCookiesInfoBssId(),
								"func":"setVolume",
								"params":[value],
								"action":"command"
							},
							headers : {
								'X-Auth-Token' : AccountService.getCookiesInfoToken()
							}
						}).then(function successCallback(response) {
							console.log(response);
						});

					});
					$scope.$watch('channelSelect', function(channel) {
						$http({
							method : 'POST',
							url : 'http://192.168.0.201:8080/v2/nodes/execute',
							data : {
								"bssid":AccountService.getCookiesInfoBssId(),
								"func":"setChannel",
								"params":[channel],
								"action":"command"
							},
							headers : {
								'X-Auth-Token' : AccountService.getCookiesInfoToken()
							}
						}).then(function successCallback(response) {
							console.log(response);
						});

					});
				} else {
					alert(response.data.error.message);
				}

			});


		}]);
})();