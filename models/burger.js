/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var burger = {
	all: function (cb) {
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},
	create: function (cols, vals, cb) {
		orm.create('burgers', cols, vals, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;