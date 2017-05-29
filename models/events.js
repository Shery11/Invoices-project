var mongoose = require('mongoose');

// event Schema
var eventSchema = mongoose.Schema({
	customer: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
	},
	 createdAt: {
        type: Date, 
        default: Date.now
    },
    ServerType: {
		type: String
	},
    PerformanceMonitorFile: {
		type: String
	}
});

var event = module.exports = mongoose.model('event', eventSchema);

// Get Invoices
module.exports.getInvoices = function(callback, limit){
	event.find(callback).limit(limit).populate('customer').sort([['createdAt', 'ascending']]);
}

// Get Single event
module.exports.getInvoiceById = function(id, callback){
	var query = {_id: id};
	event.findOne(query, callback).populate('customer');
}

// Add event
module.exports.addInvoice = function(invoice, callback){
	var add = {
		customer: invoice.customer_id,
		ServerType: invoice.ServerType,
		PerformanceMonitorFile: invoice.PerformanceMonitorFile
	}
	event.create(add, callback);
}

// Update event
module.exports.updateInvoice = function(id, invoice, options, callback){
	var query = {_id: id};
	var update = {
		ServerType: invoice.ServerType,
		PerformanceMonitorFile: invoice.PerformanceMonitorFile
	}
	event.findOneAndUpdate(query, update, options, callback);
}

// Remove event
module.exports.removeInvoice = function(id, callback){
	var query = {_id: id};
	event.remove(query, callback);
}

// Get Customer Invoices
module.exports.getCustomerInvoices = function(customer_id, callback, limit){
	var query = {customer: customer_id};
	event.find(query, callback).limit(limit).populate('customer').sort([['createdAt', 'ascending']]);
}