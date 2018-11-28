let { version } = require("../package");
const util = require('util');
const { exec } = require('child_process');
const asyncExec = util.promisify(exec);

function newVersion(ver){
	let arr = ver.split('.');
	arr[2] *= 1;
	arr[2] += 1;
	return arr.join('.');
}

(async ()=>{
	let ver = newVersion(version);
	let cmd = `yarn version --new-version ${ver}`;
	const { stdout, stderr } = await asyncExec(cmd);
	console.log(stdout);
	if(stderr) console.log(stderr);
})();
