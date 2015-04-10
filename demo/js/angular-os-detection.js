(function(angular){

	'use strict';


    /**
     * OS Detection - AngularJS Module (Service)
     * @version v0.1.0
     * @link https://github.com/jonasantonelli/angular-os-detection/
     * @author Jonas Antonelli <jonas.antonelli@gmail.com>
     * @license MIT License, http://www.opensource.org/licenses/MIT
	
	- Mac OS
	- Win
	- Linux
	- Chromium
	- BlackBerry
	- Android

     */

     var detection = angular.module('os.detection', []);


     detection.factory('$os', ['$window', function($window){

     	var platform = $window.navigator.platform,
     		name;

     	var os = {
     		chromium: 'Chromium',
     		mac: 'Mac',
     		windows: 'Win',
     		linux: 'Linux',
     		blackberry: 'BlackBerry',
     		android: 'Android'
     	};


     	for (var key in os){
     		if(platform.indexOf(os[key]) !== -1){
     			os[key] = true;
     			name = key;
     		}
     	}

     	var service = {
     		name: name,
     		isMac: function(){
     			return os.mac === true;
     		},
     		isWindows: function(){
     			return os.windows === true;
     		},
     		isLinux: function(){
     			return os.linux === true;
     		},
     		isChromium: function(){
     			return os.chromium === true;
     		},
     		isBlackBerry: function(){
     			return os.blackberry === true;
     		},
     		isAndroid: function(){
     			return os.android === true;
     		}

     	};

     	return service;

     }]);





 })(angular);
