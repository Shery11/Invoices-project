var express = require('express');
var router = express.Router();

Customer = require('../models/customer.js');
event = require('../models/events.js');

// Get All Customers
router.get('/', function(req, res){
	event.getInvoices(function(err, invoices){
		if(err){
			res.send(err);
		}
		res.json(invoices);
	});
});

// Get Single event
router.get('/:id', function(req, res){
	event.getInvoiceById(req.params.id, function(err, invoice){
		if(err){
			res.send(err);
		}
		res.json(invoice);
	});
});

// Add event
router.post('/', function(req, res){
	var invoice = req.body;
	event.addInvoice(invoice, function(err, invoice){
		if(err){
			res.send(err);
		}
		res.json(invoice);
	});
});

// Update event
router.put('/:id', function(req, res){
	var id = req.params.id;
	var invoice = req.body;
	event.updateInvoice(id, invoice, {}, function(err, invoice){
		if(err){
			res.send(err);
		}
		res.json(invoice);
	});
});

// Delete event
router.delete('/:id', function(req, res){
	var id = req.params.id;
	event.removeInvoice(id, function(err, invoice){
		if(err){
			res.send(err);
		}
		res.json(invoice);
	});
});

// Get All Invoices For a Single Customer
router.get('/customer/:customer_id', function(req, res){
	
	var customer_id = req.params.customer_id;
	event.getCustomerInvoices(customer_id, function(err, invoices){
		if(err){
			res.send(err);
			console.log(err);
		}
		res.json(invoices);
	});
});

module.exports = router;