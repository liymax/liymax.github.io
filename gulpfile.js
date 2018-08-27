const gulp = require('gulp');
const fs =require("fs");

let browserSync = require('browser-sync').create();
let reload = browserSync.reload;
gulp.task('browser-sync', function(done){
	browserSync.init({
		proxy: "127.0.0.1:9001"
	});
	gulp.watch('./dist/*.js').on('change', reload);
	done();
});
