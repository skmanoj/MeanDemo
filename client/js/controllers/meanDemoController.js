meanDemo.controller('meanDemoCountController', ['$scope', '$resource', function($scope, $resource) {
	
	var courseResource = $resource('/api/courses');

	courseResource.query(function(results) {
		$scope.courses = results;
	});

	$scope.addCourse = function() {
		var course = new courseResource();
		course.name = $scope.courseName;
		course.$save(function(result) {
			$scope.courses.push(result);
		});
		$scope.courseName = ''
	}
}])