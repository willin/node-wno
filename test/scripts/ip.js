var wno = require('../../index');
var should = require('should');

describe('wno.ip', function () {
	'use strict';
	it('ipv42int', function () {
		should(wno.ip.ipv42int('127.0.0.1')).be.equal(2130706433);
		should(wno.ip.ipv42int('255.256.0.0')).be.equal(0);
		should(wno.ip.ipv42int('test')).be.equal(0);
	});
	it('int2ipv4', function () {
		should(wno.ip.int2ipv4(2130706433)).be.equal('127.0.0.1');
		should(wno.ip.int2ipv4('2130706433')).be.equal('127.0.0.1');
		should(wno.ip.int2ipv4('test')).be.equal('0.0.0.0');
	});
});
