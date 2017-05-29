var myApp = angular.module("myApp");

myApp.controller('EventsController', ['$scope', '$http','$location','$routeParams', function($scope, $http,$location, $routeParams){
	console.log('events Controller Initialized...');

	$scope.getInvoices = function(){
		$http.get('/api/events').success(function(response){
			$scope.invoices = response;
		});
	}

	$scope.getInvoice = function(){
		var id = $routeParams.id;
		$http.get('/api/events/'+id).success(function(response){
			$scope.invoice= response;
			//Fill Select
			$scope.invoice.customer_id = response.customer._id;
			$scope.invoice.status = response.invoice.status;
		});
	}

	$scope.getCustomerInvoices = function(){
		var id = $routeParams.id;
		
		$http.get('/api/events/customer/'+id).success(function(response){
			$scope.customer_invoices = response;
			// console.log($scope.customer_invoices);
		});
	}

	$scope.getCustomers = function(){
		$http.get('/api/customers').success(function(response){
			$scope.customers = response;
		});
	}

	$scope.addInvoice = function(){
		$http.post('/api/events/',$scope.invoice).success(function(response){
			window.location.href='/#invoices';
		});
	}

	$scope.updateInvoice = function(){
		$http.put('/api/events/'+$scope.invoice._id,$scope.invoice).success(function(response){
			window.location.href='/#invoices';
		});
	}

	$scope.deleteInvoice = function(id){
		$http.delete('/api/events/'+id).success(function(response){
			window.location.href='/#invoices';
		});
	}
}]);