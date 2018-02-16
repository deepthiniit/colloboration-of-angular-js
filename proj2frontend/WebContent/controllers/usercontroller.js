/**
 user controller- to receive data from view and send data to view
 $scope variables and functions* 
 */
app.controller('UserController', function($scope, $location, UserService) {
	$scope.registerUser = function(user) {
		alert('entering usercontroller regosterUser function in frontend'
				+ user)
		console.log('entering usercontroller regosterUser function in frontend'
				+ user)
		UserService.registerUser(user).then(function(response) {
			alert('registered successfully...please login again')
			$location.path('/home')
		}, function(response) {
			$scope.error = response.data
		})
	}
	
	$scope.login = function(user) {
		console.log('Usercontroller-> login')
		console.log(user)
		UserService.login(user).then(function(response) {
			$rootscope.loggedInUser=response.data
			console.log('success')
			console.log(response.data)
			$location.path('/home')

		}, function(response) {
			console.log('error')
			console.log(response.data)
			$scope.error = response.data
			$location.path('/login')

		})
	}

});