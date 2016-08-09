	var userType = angular.module('userTypeList', ["datatables"]);

	//create controller
	userType.controller('userTypeListCtrl', function ($scope, $http, DTOptionsBuilder) {
		$scope.userType = '';
		
		// DataTables configurable options
	    $scope.dtOptions = DTOptionsBuilder.newOptions()
	        .withOption('bFilter', false)
	        .withOption('paginate', false)
	        .withOption('info', false);

			$scope.list = function(){
				$http({
				url: 'http://localhost:8080/rest/user-type',
				method: 'GET'
			}).then(function(repsonse){
				// console.log(repsonse);
				$scope.userType=repsonse.data.DATA;
			}, function(){

			});
			}

			$scope.list();
});
	angular.module("CombineModule", ["userList", "userTypeList"]);