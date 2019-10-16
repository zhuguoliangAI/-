var mysql = require('mysql');

function OptPool () {
	this.flag = true;
	this.pool = mysql.createPool({
		host: '172.22.5.241',
		user: 'root',
		password: '123456',
		database: 'study_zgl',
		port: '3306'
	});

	this.getPool = function() {
		if (this.flag) {
			this.pool.on('connection', connection => {
				connection.query('SET SESSION auto_increment_increment=1');
				this.flag = false;
			})
		}
		return this.pool;
	}

}
module.exports = OptPool;