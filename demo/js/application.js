(function(angular){

	'use strict';

	angular.module('os.detection').controller('ApplicationController', ['$scope', '$os', function($scope, $os){

		$scope.systemOperation = $os.name;

	}]);

})(angular);