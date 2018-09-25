const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

let rootDir = path.resolve(__dirname, '../');
let output = fs.createWriteStream(rootDir + '/public/dist.zip');
let archive = archiver('zip', {
	zlib: { level: 9 }
});

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

archive.directory('tests/','', (data)=>{
	let {name} = data;
	if(name.includes('eslintrc')) return false;
	return data;
});
//archive.glob(rootDir+'tests/**/*');
archive.finalize();
