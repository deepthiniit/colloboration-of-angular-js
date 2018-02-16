/**
 * user service-to make side calls
 */
app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		alert('entering userservice registeruser function ')
		console.log('in userservice'+user)
		return $http.post("http://localhost:8050/proj2middleware/registeruser",user)
		
	}
	userService.login=function(user){
		console.log('userservice->login')
		console.log(user)
		return $http.post("http://localhost:8040/proj2middleware/login",user)
		
	}
	
	
	return userService;
	
	
})