/**
 * Convert IPV4 to INT
 * @param ip
 * @returns {number}
 */
exports.ipv42int = function (ip) {
	'use strict';
	var num = 0;
	ip = ip.split('.');
	num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
	num = num >>> 0;
	return num;
};

/**
 * Convert Int to IPV4
 * @param num
 * @returns {string|*}
 */
exports.int2ipv4 = function (num) {
	'use strict';
	var str;
	var tt = [];
	tt[0] = (num >>> 24) >>> 0;
	tt[1] = ((num << 8) >>> 24) >>> 0;
	tt[2] = (num << 16) >>> 24;
	tt[3] = (num << 24) >>> 24;
	str = String(tt[0]) + '.' + String(tt[1]) + '.' + String(tt[2]) + '.' + String(tt[3]);
	return str;
};

/**
 * Get Unix Timestamp
 * @param date
 * @returns {Number}
 */
exports.getTimestamp = function (date) {
	'use strict';
	date = new Date(date).toString() === 'Invalid Date' ? new Date() : new Date(date);
	return parseInt(date.getTime() / 1000, 10);
};

