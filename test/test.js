'use strict';
var fs = require('fs');

exports['6to5'] = {
	compile: function (test) {
		var code = fs.readFileSync('test/tmp/fixture.js', 'utf8');
		test.ok(/function/.test(code));

		var map = fs.readFileSync('test/tmp/fixture.js.map', 'utf8');
		test.deepEqual(JSON.parse(map).names, ['Test']);

		test.done();
	}
};
