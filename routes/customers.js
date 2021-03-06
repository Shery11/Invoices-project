var express = require('express');
var router = express.Router();

Customer = require('../models/customer.js');
event = require('../models/events.js');

// Get All Customers
router.get('/', function(req, res){
	Customer.getCustomers(function(err, customers){
		if(err){
			res.send(err);
		}
		res.json(customers);
	});
});

// Get Single Customer
router.get('/:id', function(req, res){
	Customer.getCustomerById(req.params.id, function(err, customer){
		if(err){
			res.send(err);
		}
		res.json(customer);
	});
});

// Add Customer
router.post('/', function(req, res){
	var customer = req.body;
	Customer.addCustomer(customer, function(err, customer){
		if(err){
			res.send(err);
		}
		res.json(customer);
	});
});

// Update Customer
router.put('/:id', function(req, res){
	var id = req.params.id;
	var customer = req.body;
	Customer.updateCustomer(id, customer, {}, function(err, customer){
		if(err){
			res.send(err);
		}
		res.json(customer);
	});
});

// Delete Customer
router.delete('/:id', function(req, res){
	var id = req.params.id;
	Customer.removeCustomer(id, function(err, customer){
		if(err){
			res.send(err);
		}
		res.json(customer);
	});
});

module.exports = router;