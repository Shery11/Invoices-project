var mongoose = require('mongoose');

// Customer Schema
var customerSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	number:{
		type: String,
		required: true
	}
  
	
});

var Customer = module.exports = mongoose.model('Customer', customerSchema);

// Get customers
module.exports.getCustomers = function(callback, limit){
	Customer.find(callback).limit(limit).sort([['name', 'ascending']]);
}

// Get customer
module.exports.getCustomerById = function(id, callback){
	Customer.findById(id, callback);
}

// Add Customer
module.exports.addCustomer = function(customer, callback){
	var add = {
		name: customer.name,
		number: customer.number
		
	}
	Customer.create(add, callback);
}

// Update Customer
module.exports.updateCustomer = function(id, customer, options, callback){
	var query = {_id: id};
	var update = {
		name: customer.name,
		number: customer.number
	
	}
	Customer.findOneAndUpdate(query, update, options, callback);
}


// Remove Customer
module.exports.removeCustomer = function(id, callback){
	var query = {_id: id};
	Customer.remove(query, callback);
}
