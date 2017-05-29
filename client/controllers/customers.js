var myApp = angular.module("myApp");

myApp.controller('CustomersController', ['$scope', '$http','$location','$routeParams','$rootScope', function($scope, $http,$location, $routeParams,$rootScope){
	$scope.getCustomers = function(){
		$http.get('/api/customers').success(function(response){
			$scope.customers = response;

			for(var i=0 ;i < $scope.customers.length; i++){
                var id = $scope.customers[i]._id;
                 //console.log(id);
                
               $http.get('/api/events/customer/'+id).success(function(response){
			   $scope.customer_invoices = response;
			   $scope.length = $scope.customer_invoices.length;
		       console.log($scope.length);

		        });


			}
		});
	}
    $scope.getCustomer = function(){
		var id = $routeParams.id;
		$http.get('/api/customers/'+id).success(function(response){
			$scope.customer = response;
		});


	}

	$scope.getCustomerInvoices = function(){
		var id = $routeParams.id;
		$rootScope.myid = id;
         // console.log($rootScope.myid);

				
		$http.get('/api/events/customer/'+id).success(function(response){
			$scope.customer_invoices = response;
			// $scope.length = $scope.customer_invoices.length;
		 //      console.log($scope.length);

		});
	}

	$scope.addInvoice = function(){
            $http.post('/api/events',$scope.invoice).success(function(response){
			 //console.log($scope.invoice.length);
			window.location.href='/#customers';

		});
	}

    $scope.addCustomer = function(){
		$http.post('/api/customers/',$scope.customer).success(function(response){
			window.location.href='/#customers';
		});
	}

	$scope.updateCustomer = function(){
		$http.put('/api/customers/'+$scope.customer._id,$scope.customer).success(function(response){
			window.location.href='/#customers';
		});
	}

	$scope.deleteCustomer = function(id){
		$http.delete('/api/customers/'+id).success(function(response){
			window.location.href='/#customers';
		});
	}
}]);