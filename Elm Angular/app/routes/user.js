'use strict';
var users = require('../controller/user.js');

module.exports = function(app) {

	 app.route('/save')
		.get(users.list)
		.post(users.create)
		.delete(users.delete)
		.put(users.update);

}