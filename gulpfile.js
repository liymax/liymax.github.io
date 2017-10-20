let gulp = require('gulp');
let git = require('gulp-git');

gulp.task('add', function(){
	return gulp.src(['./dist/*','./src/*'])
		.pipe(git.add());
});

gulp.task('commit',['add'], function(){
	return gulp.src('./**/*')
		.pipe(git.commit(undefined, {
			args: '-m "auto commit"',
			disableMessageRequirement: true
		}));
});

