var child_process = require('child_process');
var util = require('util');

/*
 * 原理：命令行拷贝 cp -r source/* target
 */
function copy(source, target, callback) {
	var cmd = util.format('cp -r %s %s', source, target);
	console.log(cmd);
	var cp = child_process.exec(cmd, callback);
	// console.log(cp);
}

// copy('~/zuizan/docs', '~/tmp/test7', function(err, stdout, stderr) {
// 	console.log(err);
// 	console.log(stdout);
// 	console.log(stderr);
// });

// main('~/tmp/', '~/tmp/test/');

function main(argv) {
	console.log(argv[0]);
	console.log(argv[1]);
	copy(argv[0], argv[1], function(err, stdout, stderr) {
		if (err) { 
			throw err;
		}
		console.log('result is ', err, stdout, stderr);
		console.log('copy succesful...');
	});
}


// node-dev child_process.js ~/zuizan/README.md ~/tmp/test.txt
// node-dev child_process.js ~/zuizan/docs ~/tmp/docs
main(process.argv.splice(2));

