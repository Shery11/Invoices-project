var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/',{
		controller: 'CustomersController',
		templateUrl: 'views/dashboard.html'
	})
	.when('/customers',{
		controller: 'CustomersController',
		templateUrl: 'views/customers.html'
	})
	.when('/customers/details/:id',{
		controller: 'CustomersController',
		templateUrl: 'views/customer_details.html'
	})
	.when('/customers/add', {
    	controller: 'CustomersController',
    	templateUrl: 'views/add_customer.html'
  	})
  	.when('/invoices/add', {
    	controller: 'CustomersController',
    	templateUrl: 'views/add_event.html'
  	})
  	.when('/customers/edit/:id',{
		controller: 'CustomersController',
		templateUrl: 'views/edit_customer.html'
	});
	// .otherwise({
	// 	redirectTo: '/'
	// });
});