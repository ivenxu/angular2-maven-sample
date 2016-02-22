var gulp = require('gulp');
var usemin = require('gulp-usemin');

gulp.task('default', function() {
  return gulp.src('./src/main/front/*.html')
    .pipe(usemin({
      html: [],
      css: [],
      js: []
    }))
    .pipe(gulp.dest('./src/main/webapp/'));
});
