meanDemo.controller('meanDemoCountController', ['$scope', '$resource', function($scope, $resource) {
	$scope.courses = [
		{name: "IRE"},
		{name: "Search optimization"}
	]

	$scope.addCourse = function() {
		$scope.courses.push({name: $scope.courseName})
		$scope.courseName = ''
	}
}])