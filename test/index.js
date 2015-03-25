var should = require('should');
var wno = require('../index');
describe('WNO', function () {
	'use strict';
	it('ipv42int', function () {
		should(wno.ipv42int('127.0.0.1')).be.equal(2130706433);
		should(wno.ipv42int('255.256.0.0')).be.equal(0);
		should(wno.ipv42int('test')).be.equal(0);
	});
	it('int2ipv4', function () {
		should(wno.int2ipv4(2130706433)).be.equal('127.0.0.1');
		should(wno.int2ipv4('2130706433')).be.equal('127.0.0.1');
		should(wno.int2ipv4('test')).be.equal('0.0.0.0');
	});
	it('getTimestamp', function () {
		wno.getTimestamp();//Now
		should(wno.getTimestamp('test'))
			.be.greaterThan(wno.getTimestamp() - 10);//Now
		should(wno.getTimestamp('2015-03-03 12:48:00')).be.lessThan(wno.getTimestamp() - 3600 * 24 * 7);
	});
});
