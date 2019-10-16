// 基本服务启动

var http = require('http');
var os = require('os');
var url = require('url');
var querystring = require('querystring'); // post需要导入
var mysql = require('mysql');

// node 链接数据库有两种方式，一个是直接链接(npm install mysql)，一个是通过连接池链接(npm install node-mysql)需要mysql-pool模块

// 直接链接
var connection = mysql.createConnection({
	host: '172.30.0.111',
	user: 'root',
	password: 'Uhope123',
	database: 'hzz_dezhou',
	port: '3306'
});

// // 创建一个链接
// connection.connect( err => {
// 	if (err) {
// 		console.log('[query]--:' + err);
// 		return;
// 	}
// 	console.log('``````````````````[connection connect success]``````````````````');
// })

// // 执行查询
// var sqlStr = 'insert into sm_user(id, username, password, name, status) values(?,?,?,?,?)';
// var param = ['12345667', 'node2', '123456', 'node2', '0'];
// //  插入
// connection.query(sqlStr, param, (error, rs) => {
// 	if (error) {
// 		console.log('insert error---' + error);
// 		return;
// 	}
// 	console.log('``````````````````````insert success````````````````````````');
// })
// // 查询
// connection.query('select * from sm_user', (error, rs) => {
// 	if (error) {
// 		console.log('query error:' + error);
// 		return;
// 	}
// 	for (var i = 0; i < rs.length; i++) {
// 		console.log(rs[i].NAME);
// 	}
// 	console.log('````````````````````query success``````````````````````````');
// })

// // 关闭链接
// connection.end( error => {
// 	if (error) {
// 		console.log('[close]--:' + error);
// 		return;
// 	}
// 	console.log('[connection closed success]')
// })


http.createServer( (request, response) => {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	if (request.url !== '/favicon.ico') {
		// get方式获取参数
		// console.log(JSON.stringify(url.parse(request.url, true).query)); // true 参数将参数转化为对象
		response.end('Hello World'); // end函数表示本次请求完成了，否则会一直在转

		// post方式获取参数
		// var post = '';
		// request.on('data', chunck => post += chunck);
		// request.on('end', () => {
		// 	post = querystring.parse(post);   // 这样获取post的参数与body的type是有关系的，不同类型的body获取到的类型是不一样的
		// 	console.log(JSON.stringify(post));
		// });
	}
	
}).listen(3000);
 
console.log('Server running at http://127.0.0.1:3000/');	