var OptPool = require('./module/optPool');

var optPool = new OptPool();

var pool = optPool.getPool();

pool.getConnection( (err, conn) => {
	if (err) {
		console.log('getConnection error:' + err);
		return;
	}
	conn.query('select * from product', (error, rs) => {
		if (error) {
			console.log('getConnection error:' + error);
			return;
		}
		for (var i = 0; i < rs.length; i++) {
			console.log(rs[i].id);
		}
		conn.release();
	})
})