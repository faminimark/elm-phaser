App.controller("inputCredCtrl",["$scope", "$http","$location",
	function($scope , $http, $location, user){

		$scope.save = function(user){

			// $http({
			// 	method: 'POST',
			// 	url: '/save',
			// 	data:user
			// });

			$location.path('/guide');
		};
		
}]);

App.controller("GuideCtrl",["$scope","$http","$location","GuideFactory",
	function($scope, $http, $location, GuideFactory){

		$scope.guides = GuideFactory;
		$scope.page = 1;
		
		$scope.next = function(){
			console.log($scope.page)
			if($scope.page != 4){
				$scope.page++;
			}else{
				$location.path('/result');
			}
		}
		$scope.prev = function(){
			if($scope.page != 1){
				$scope.page--;
			}
		}
}]);
