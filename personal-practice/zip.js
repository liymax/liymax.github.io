const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
let { version } = require("../package");

zip(version);
function zip(ver){
	let rootDir = path.resolve(__dirname, '../');
	let output = fs.createWriteStream(rootDir + `/release/ksc_dist${ver}.zip`);
	let archive = archiver('zip', { zlib: { level: 9 } });

	output.on('close', function() {
		console.log(archive.pointer() + ' total bytes');
		console.log('archiver has been finalized and the output file descriptor has closed.');
	});
	output.on('end', function() {
		console.log('Data has been drained');
	});
	archive.on('warning', function(err) {
		if (err.code === 'ENOENT') {
			console.log('No such file or directory')
		} else {
			throw err;
		}
	});
	archive.on('error', function(err) {
		throw err;
	});

	archive.pipe(output);
	archive.directory('dist/','', (data)=>{
		return data;
	});

	archive.finalize();
}


