//gulpfile.js
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', function(done){
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
    done();
});

gulp.task('default', function(){
    return new Promise(function(resolve, reject){
        console.log('GULP GULP GULP');
        resolve();
    });    
});
