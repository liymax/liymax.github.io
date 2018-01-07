let gulp = require('gulp');
let git = require('gulp-git');


let gitPaths=['./index.html','./dist/*','./src/*'];
gulp.task('add', function(){
	return gulp.src(gitPaths).pipe(git.add());
});

gulp.task('commit',['add'], function(){
	return gulp.src(gitPaths).pipe(git.commit(undefined, {
			args: '-m "auto commit"',
			disableMessageRequirement: true
		}));
});

