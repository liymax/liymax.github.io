const del = require('del');
const gulp = require('gulp');

let { version } = require("./package.json");
const util = require('util');
const { exec } = require('child_process');
const asyncExec = util.promisify(exec);

function newVersion(ver){
	let arr = ver.split('.');
	arr[2] *= 1;
	arr[2] += 1;
	return arr.join('.');
}

function updateVersion() {
	const ver = newVersion(version);
	const cmd = `yarn version --new-version ${ver}`;
	return asyncExec(cmd);
}

function clean() {
	return del(['lib/**', '!lib']);
}

function build(){
	const cmd = `tsc`;
	return asyncExec(cmd);
}

exports.default = gulp.series(updateVersion,clean,build);
