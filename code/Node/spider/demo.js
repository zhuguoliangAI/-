// node 自带模块
var path = require('path');
var url = require('url');
var fs = require('fs');
var http = require('http');

// npm安装依赖库
var superagent = require('superagent');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');
var async = require('async');
// var mkdir = require('mkdirp');
var iconv = require('iconv-lite');

// 设置爬虫目标
var targetUrl = 'http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2016/';

http.get(targetUrl, res => {
	var html = [];
	var length = 0; 
	res.on('data', data => {
		html.push(data);
		length+=data.length;
	});
	res.on('end', () => {
		var data = Buffer.concat(html,length);
		var change_data = iconv.decode(data,'gb2312');
		getCity(change_data.toString());
	});
}).on('error', error => {
	console.log('获取数据出错');
})

function getCity (html) {
	var $ = cheerio.load(html);
	var citis = $('.provincetr');
	var cityNames = [];
	citis.each(function(index, el) {
		$(el).find('td').each(function(index, el) {
			cityNames.push($(el).text());
		});
	});
	console.log(cityNames);
}
