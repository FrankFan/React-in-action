var fs = require('fs');


function copy(src, dst) {
	fs.writeFileSync(dst, fs.readFileSync(src));
}

function copyBig(src, dst) {
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
	console.log(argv[0]);
	console.log(argv[1]);
	copyBig(argv[0], argv[1]);
}

main(process.argv.splice(2));